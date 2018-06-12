var registerBlockType = wp.blocks.registerBlockType;

var RichText = wp.editor.RichText; // RichText is for Formatted content Editable areas (its value is an array)
var PlainText = wp.editor.PlainText; // PlainText is for Formatted content Editable areas (its value is a string)
var InspectorControls = wp.editor.InspectorControls; // Used to show controls in the block inspector

// Just a way to wrap elements without producing any wrapper markup
var Fragment = wp.element.Fragment;
var el = wp.element.createElement;

// Components contain several reusable React components
var SelectControl = wp.components.SelectControl;

registerBlockType("gew/advanced-static-block", {
  title: "03 - Advanced Static Block",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    type: {
      type: "string",
      default: "default"
    },
    message: {
      type: "array",
      // The source: "children" returns an array of React elements
      // This should be used when we use a RichText editable
      source: "children",
      selector: ".message",
      default: []
    },
    submessage: {
      type: "string",
      source: "html",
      selector: ".submessage"
    }
  },

  edit: function(props) {
    var className = props.className;
    var setAttributes = props.setAttributes;

    var type = props.attributes.type;
    var message = props.attributes.message;
    var submessage = props.attributes.submessage;

    function updateMessage(message) {
      setAttributes({ message });
    }
    function updateSubmessage(submessage) {
      setAttributes({ submessage });
    }
    function updateType(type) {
      setAttributes({ type });
    }

    return el(
      Fragment,
      {},
      el(
        "div",
        { className: className + " alert-" + type },

        el(RichText, {
          className: "message",
          value: message,
          onChange: updateMessage,
          placeholder: "Write a message"
        }),
        el(PlainText, {
          className: "submessage",
          value: submessage,
          onChange: updateSubmessage,
          placeholder: "Write a caption"
        })
      ),
      el(
        InspectorControls,
        {},
        el(SelectControl, {
          label: "Message Type",
          value: type,
          options: [
            { label: "Default", value: "default" },
            { label: "Danger", value: "danger" },
            { label: "Warning", value: "warning" },
            { label: "Success", value: "success" }
          ],
          onChange: updateType
        })
      )
    );
  },

  save: function(props) {
    var type = props.attributes.type;
    var message = props.attributes.message;
    var submessage = props.attributes.submessage;

    return el(
      "div",
      { className: "alert-" + type },
      el("p", { className: "message" }, message),
      el("p", { className: "submessage" }, submessage)
    );
  }
});

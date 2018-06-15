var registerBlockType = wp.blocks.registerBlockType;
var el = wp.element.createElement;

registerBlockType("gew/static-block", {
  title: "02 - Static Block",
  icon: "welcome-learn-more",
  category: "common",

  // Attributes definition (how to parse the block attributes)
  attributes: {
    type: {
      type: "string",
      default: "default"
    },
    message: {
      type: "string",
      source: "html",
      selector: "p"
    }
  },

  edit: function(props) {
    var className = props.className;
    var setAttributes = props.setAttributes;

    // Extracting block attributes
    var type = props.attributes.type;
    var message = props.attributes.message;

    // Event handler to update a block attribute
    function updateMessage(event) {
      setAttributes({ message: event.target.value });
    }

    return el(
      "p",
      { className: className + " alert-" + type },
      el("textarea", { value: message, onChange: updateMessage })
    );
  },

  save: function(props) {
    var type = props.attributes.type;
    var message = props.attributes.message;
    return el("p", { className: "alert-" + type }, message);
  }
});

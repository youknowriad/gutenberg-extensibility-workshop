var get = lodash.get;

var el = wp.element.createElement;
var registerBlockType = wp.blocks.registerBlockType;
var PlainText = wp.editor.PlainText;

// Higher Order Component used to generate unique id per component instance
var withInstanceId = wp.compose.withInstanceId;

registerBlockType("gew/meta-block", {
  title: "05 - Meta Block",
  icon: "welcome-learn-more",
  category: "common",

  attributes: {
    description: {
      type: "string",
      source: "meta", // Define that this attribute is stored in a meta field
      meta: "short_description" // Name of the custom field used to store/fetch the attribute
    }
  },

  edit: withInstanceId(function(props) {
    var className = props.className;
    var setAttributes = props.setAttributes;
    var instanceId = props.instanceId;

    var description = props.attributes.description;
    function updateDescription(description) {
      setAttributes({ description });
    }

    return el(
      "div",
      { className: className },
      el("label", { htmlFor: instanceId }, "Short Description"),
      el(PlainText, {
        id: instanceId,
        value: description,
        onChange: updateDescription
      })
    );
  }),

  // In general meta blocks don't render anything
  // But it's up to the block author really.
  save: function() {
    return null;
  }
});

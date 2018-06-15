var addFilter = wp.hooks.addFilter;
var Fragment = wp.element.Fragment;
var RichText = wp.editor.RichText;
var el = wp.element.createElement;

// Hook function to add a caption to the core code block
function addCaptionToCodeBlock(settings) {
  if (settings.name !== "core/code") {
    return settings;
  }

  const newCodeBlockSettings = Object.assign({}, settings, {
    attributes: Object.assign({}, settings.attributes, {
      caption: {
        source: "children",
        selector: ".my-caption",
        type: "array",
        default: []
      }
    }),

    edit: function(props) {
      function updateCaption(caption) {
        props.setAttributes({ caption });
      }

      return el(
        Fragment,
        {},
        el(settings.edit, props),
        el(RichText, {
          className: "my-caption",
          placeholder: "write caption",
          value: props.attributes.caption,
          onChange: updateCaption
        })
      );
    },

    save: function(props) {
      return el(
        "div",
        {},
        el(settings.save, props),
        el("div", { className: "my-caption" }, props.attributes.caption)
      );
    }
  });

  return newCodeBlockSettings;
}

// Registering the filter to edit the block settings
addFilter(
  "blocks.registerBlockType",
  "myplugin/add-code-caption",
  addCaptionToCodeBlock
);

import { addFilter } from "@wordpress/hooks";
import { Fragment } from "@wordpress/element";
import { RichText } from "@wordpress/blocks";

// Hook function to add a caption to the core code block
const addCaptionToCodeBlock = settings => {
  if (settings.name !== "core/code") {
    return settings;
  }

  const newCodeBlockSettings = {
    ...settings,

    attributes: {
      ...settings.attributes,
      caption: {
        source: "children",
        selector: ".my-caption",
        type: "array",
        default: []
      }
    },

    edit(props) {
      const updateCaption = caption => props.setAttributes({ caption });
      return (
        <Fragment>
          <settings.edit {...props} />
          <RichText
            className="my-caption"
            placeholder="write caption"
            value={props.attributes.caption}
            onChange={updateCaption}
          />
        </Fragment>
      );
    },

    save(props) {
      return (
        <div>
          <settings.save {...props} />
          <div className="my-caption">{props.attributes.caption}</div>
        </div>
      );
    }
  };

  return newCodeBlockSettings;
};

// Registering the filter to edit the block settings
addFilter(
  "blocks.registerBlockType",
  "myplugin/add-code-caption",
  addCaptionToCodeBlock
);

import { get } from "lodash";

import "./style.scss";
import { registerBlockType, PlainText } from "@wordpress/blocks";

// Higher Order Component used to generate unique id per component instance
import { withInstanceId } from "@wordpress/components";

registerBlockType("gew/meta-block", {
  title: "04 - Meta Block",
  icon: "welcome-learn-more",
  category: "common",

  attributes: {
    description: {
      type: "string",
      source: "meta", // Define that this attribute is stored in a meta field
      meta: "short_description" // Name of the custom field used to store/fetch the attribute
    }
  },

  edit: withInstanceId(
    ({ className, attributes, setAttributes, instanceId }) => {
      const { description } = attributes;
      const updateDescription = description => setAttributes({ description });

      return (
        <div className={className}>
          <label htmlFor={instanceId}>Short Description</label>
          <PlainText
            id={instanceId}
            value={description}
            onChange={updateDescription}
          />
        </div>
      );
    }
  ),

  // In general meta blocks don't render anything
  // But it's up to the block author really.
  save() {
    return null;
  }
});

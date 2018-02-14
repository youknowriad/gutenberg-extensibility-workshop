import {
  registerBlockType,
  RichText, // RichText is for Formatted content Editable areas (its value is an array)
  PlainText, // PlainText is for Formatted content Editable areas (its value is a string)
  InspectorControls // Used to show controls in the block inspector
} from "@wordpress/blocks";

// Just a way to wrap elements without producing any wrapper markup
import { Fragment } from "@wordpress/element";

// Components contain several reusable React components
import { SelectControl } from "@wordpress/components";

import "./style.scss";

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

  edit({ className, attributes, setAttributes, isSelected }) {
    const { type, message, submessage } = attributes;

    const updateMessage = message => setAttributes({ message });
    const updateSubmessage = submessage => setAttributes({ submessage });
    const updateType = type => setAttributes({ type });

    return (
      <Fragment>
        <div className={className + " alert-" + type}>
          <RichText
            className="message"
            value={message}
            onChange={updateMessage}
            isSelected={isSelected}
            placeholder="Write a message"
          />
          <PlainText
            className="submessage"
            value={submessage}
            onChange={updateSubmessage}
            placeholder="Write a caption"
          />
        </div>

        {isSelected && (
          <InspectorControls>
            <SelectControl
              label="Message Type"
              value={type}
              options={[
                { label: "Default", value: "default" },
                { label: "Danger", value: "danger" },
                { label: "Warning", value: "warning" },
                { label: "Success", value: "success" }
              ]}
              onChange={updateType}
            />
          </InspectorControls>
        )}
      </Fragment>
    );
  },

  save({ attributes }) {
    const { type, message, submessage } = attributes;
    return (
      <div className={"alert-" + type}>
        <p className="message">{message}</p>
        <p className="submessage">{submessage}</p>
      </div>
    );
  }
});

import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

registerBlockType("gew/static-block", {
  title: "02 - Static Block",
  icon: "welcome-learn-more",
  category: "common",

  // Attributes definition (how to parse the block attributes)
  attributes: {
    type: {
      type: "string",
      default: "danger"
    },
    message: {
      type: "string",
      source: "html",
      selector: "p"
    }
  },

  edit({ className, attributes, setAttributes }) {
    // Extracting block attributes
    const { type, message } = attributes;

    // Event handler to update a block attribute
    const updateMessage = event =>
      setAttributes({ message: event.target.value });

    return (
      <p className={className + " alert-" + type}>
        <textarea value={message} onChange={updateMessage} />
      </p>
    );
  },

  save({ attributes }) {
    const { type, message } = attributes;
    return <p className={"alert-" + type}>{message}</p>;
  }
});

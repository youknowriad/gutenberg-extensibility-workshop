// Blocks
var registerBlockType = wp.blocks.registerBlockType;
var el = wp.element.createElement;

registerBlockType("gew/playground", {
  // Title of the block.
  title: "00 - Playground",

  // Icon of the block dashicon string (https://developer.wordpress.org/resource/dashicons) or custom svg element.
  icon: "welcome-learn-more",

  // Category (common, formatting, layout, widgets, embed)
  category: "common",

  // Description of the block
  description: "This block introduces you to block creation",

  // Keywords to search for the block
  keywords: ["learn", "gutenberg"],

  // Block's editor representation
  edit: function(props) {
    return el("p", { className: props.className }, "Welcome to Gutenberg");
  },

  // Block's frontend representation
  save: function() {
    return el("p", {}, "Welcome to Gutenberg");
  }
});

// Plugins
var registerPlugin = wp.plugins.registerPlugin;

registerPlugin("gew-playground", {
  // Icon of the block dashicon string (https://developer.wordpress.org/resource/dashicons) or custom svg element.
  icon: "welcome-learn-more",

  // Plugin's representation
  render: function() {
    return null;
  }
});

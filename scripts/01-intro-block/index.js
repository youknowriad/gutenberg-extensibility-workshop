import { registerBlockType } from "@wordpress/blocks";

registerBlockType("gew/intro-block", {
  // Title of the block.
  title: "01 - Intro Block",

  // Icon of the block dashicon string (https://developer.wordpress.org/resource/dashicons) or custom svg element.
  icon: "welcome-learn-more",

  // Category (common, formatting, layout, widgets, embed)
  category: "common",

  // Description of the block
  description: "This block introduces you to block creation",

  // Keywords to search for the block
  keywords: ["learn", "gutenberg"],

  // Block's editor representation
  edit({ className }) {
    return <p className={className}>Welcome to Gutenberg</p>;
  },

  // Block's frontend representation
  save({ attributes }) {
    return <p>Welcome to Gutenberg</p>;
  }
});

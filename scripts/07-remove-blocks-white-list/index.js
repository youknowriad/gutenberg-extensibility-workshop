import { unregisterBlockType, getBlockTypes } from "@wordpress/blocks";

const allowedBlocks = [
  "core/paragraph",
  "core/image",
  "core/html",
  "core/freeform"
];

// Hack (will be fixed)
// Delay the call to ensure the blocks are registered.
setTimeout(() => {
  getBlockTypes().forEach(blockType => {
    if (allowedBlocks.indexOf(blockType.name) === -1) {
      wp.blocks.unregisterBlockType(blockType.name);
    }
  });
}, 100);

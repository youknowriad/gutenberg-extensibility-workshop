import { unregisterBlockType, getBlockType } from "@wordpress/blocks";

const blackList = ["core/pullquote", "core/verse"];

// Function to enregister a block if it exists
const unregisterIfExists = blockName => {
  const block = getBlockType(blockName);
  if (block) {
    unregisterBlockType(blockName);
  }
};

// Hack (will be fixed)
// Delay the call to ensure the blocks are registered.
setTimeout(() => {
  blackList.forEach(unregisterIfExists);
}, 100);

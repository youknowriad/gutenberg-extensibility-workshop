import { uniq } from "lodash";

// Function to register and active a sidebar
import { registerSidebar, activateSidebar } from "@wordpress/editPost";

// Higher Order Component used to extract data from the data store
import { withSelect } from "@wordpress/data";

// Function used to get informations about a block type
import { getBlockType } from "@wordpress/blocks";

import "./style.scss";

// Component showing my sidebar
const BlockTypesSidebar = withSelect(select => ({
  blocks: select("core/editor").getBlocks()
}))(({ blocks }) => {
  const blockTypes = uniq(blocks.map(block => block.name)).map(getBlockType);

  return (
    <div className="gew-sidebar">
      Your post is using <strong>{blockTypes.length}</strong> different block
      types.
      <ul>
        {blockTypes.map(blockType => (
          <li key={blockType.name}>{blockType.title}</li>
        ))}
      </ul>
    </div>
  );
});

// Registers a new sidebar with a name and a title
registerSidebar("gew/block-types-sidebar", {
  title: "Block Types",
  render: () => <BlockTypesSidebar />
});

// Activates the sidebar
// wp.editPost.activateSidebar("gew/block-types-sidebar");

import { uniq } from "lodash";

// Function to register and active a sidebar
import { registerPlugin } from "@wordpress/plugins";

// Higher Order Component used to extract data from the data store
import { withSelect } from "@wordpress/data";

// Function used to get informations about a block type
import { getBlockType } from "@wordpress/blocks";

// Slots to use
import { PluginSidebarMoreMenuItem, PluginSidebar } from "@wordpress/editPost";

import { Fragment } from "@wordpress/element";

import "./style.css";

// Component showing the menu item
const BlockTypesMoreMenuItem = () => (
  <PluginSidebarMoreMenuItem target="gew-sidebar" icon="smiley">
    Used Block Types
  </PluginSidebarMoreMenuItem>
);

// Component showing my sidebar
const BlockTypesSidebar = withSelect(select => ({
  blocks: select("core/editor").getBlocks()
}))(({ blocks }) => {
  const blockTypes = uniq(blocks.map(block => block.name)).map(getBlockType);

  return (
    <PluginSidebar
      name="gew-sidebar"
      title="My block Types sidebar"
      icon="smiley"
    >
      <div className="gew-sidebar">
        Your post is using <strong>{blockTypes.length}</strong> different block
        types.
        <ul>
          {blockTypes.map(blockType => (
            <li key={blockType.name}>{blockType.title}</li>
          ))}
        </ul>
      </div>
    </PluginSidebar>
  );
});

function BlockTypesPlugin() {
  return (
    <Fragment>
      <BlockTypesMoreMenuItem />
      <BlockTypesSidebar />
    </Fragment>
  );
}

// Registers a new sidebar with a name and a title
registerPlugin("gew-block-types-sidebar", {
  render: () => <BlockTypesPlugin />
});

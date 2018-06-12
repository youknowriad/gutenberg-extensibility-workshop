var uniq = lodash.uniq;

// Function to register and active a sidebar
var registerPlugin = wp.plugins.registerPlugin;

// Higher Order Component used to extract data from the data store
var withSelect = wp.data.withSelect;

// Function used to get informations about a block type
var getBlockType = wp.blocks.getBlockType;

// Slots to use
var PluginSidebarMoreMenuItem = wp.editPost.PluginSidebarMoreMenuItem;
var PluginSidebar = wp.editPost.PluginSidebar;

var Fragment = wp.element.Fragment;
var el = wp.element.createElement;

// Component showing the menu item
var BlockTypesMoreMenuItem = function() {
  return el(
    PluginSidebarMoreMenuItem,
    { target: "gew-sidebar", icon: "smiley" },
    "Used Block Types"
  );
};

// Component showing my sidebar
var BlockTypesSidebar = withSelect(function(select) {
  return {
    blocks: select("core/editor").getBlocks()
  };
})(function(props) {
  var blocks = props.blocks;
  var blockTypes = uniq(
    blocks.map(function(block) {
      return block.name;
    })
  ).map(getBlockType);

  return el(
    PluginSidebar,
    {
      name: "gew-sidebar",
      title: "My block Types sidebar",
      icon: "smiley"
    },
    el(
      "div",
      { className: "gew-sidebar" },
      "Your post is using ",
      el("strong", null, blockTypes.length),
      " different block types.",
      el(
        "ul",
        null,
        blockTypes.map(function(blockType) {
          return el("li", { key: blockType.name }, blockType.title);
        })
      )
    )
  );
});

function BlockTypesPlugin() {
  return el(Fragment, null, el(BlockTypesMoreMenuItem), el(BlockTypesSidebar));
}

// Registers a new sidebar with a name and a title
registerPlugin("gew-block-types-sidebar", {
  render: function() {
    return el(BlockTypesPlugin);
  }
});

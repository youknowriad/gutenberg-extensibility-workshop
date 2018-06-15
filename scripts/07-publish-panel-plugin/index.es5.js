var el = wp.element.createElement;
var Fragment = wp.element.Fragment;
var registerPlugin = wp.plugins.registerPlugin;
// Special component which allows to render your content before any post gets published
var PluginPostPublishPanel = wp.editPost.PluginPostPublishPanel;
// Special component which allows to render your content after any post gets published

var PluginPrePublishPanel = wp.editPost.PluginPrePublishPanel;

// Component which can be reused to render the body of the panels
function PanelContent() {
  return el("p", {}, "Here is the panel content!");
}

// Plugin's representation
function MyPublishPanelPlugin() {
  return el(
    Fragment,
    {},
    el(
      PluginPrePublishPanel,
      {
        className: "gew-publish-panel-plugin__pre",
        title: "My pre publish panel"
      },
      el(PanelContent, {})
    ),
    el(
      PluginPostPublishPanel,
      {
        className: "gew-publish-panel-plugin__post",
        title: "My post publish panel"
      },
      el(PanelContent, {})
    )
  );
}

registerPlugin("gew-publish-panel-plugin", {
  render: MyPublishPanelPlugin
});

var el = wp.element.createElement;
// Function which allows to register plugin
var registerPlugin = wp.plugins.registerPlugin;
// Special component which allows to render your content inside the Post & Visibility panel
var PluginPostStatusInfo = wp.editPost.PluginPostStatusInfo;

// Plugin's representation
function MyPostStatusInfoPlugin() {
  return el(
    PluginPostStatusInfo,
    {
      className: "gew-post-status-info-plugin"
    },
    "My post status info"
  );
}

registerPlugin("gew-post-status-info-plugin", {
  render: MyPostStatusInfoPlugin
});

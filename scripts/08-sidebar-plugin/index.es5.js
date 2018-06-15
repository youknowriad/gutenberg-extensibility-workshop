var Button = wp.components.Button;
var PanelBody = wp.components.PanelBody;
var PanelRow = wp.components.PanelRow;
var withDispatch = wp.data.withDispatch;
var withSelect = wp.data.withSelect;
var Fragment = wp.element.Fragment;
var compose = wp.element.compose;
var el = wp.element.createElement;
var registerPlugin = wp.plugins.registerPlugin;
var PluginSidebar = wp.editPost.PluginSidebar;
var PluginSidebarMoreMenuItem = wp.editPost.PluginSidebarMoreMenuItem;

// A component which renders the inner part of the sidebar
function SidebarContents(props) {
  var noTitle = el("em", {}, "(No title)");
  return el(
    PanelBody,
    {},
    el(PanelRow, {}, props.title || noTitle),
    el(
      PanelRow,
      {},
      el(Button, { isPrimary: true, onClick: props.onReset },"Reset")
    )
  );
}

// The way to wrap UI component with the wrapper components which add additional logic
var SidebarContentsWithDataHandling = compose([
  withSelect(function(select) {
    return {
      title: select("core/editor").getEditedPostAttribute("title")
    };
  }),
  withDispatch(function(dispatch) {
    return {
      onReset: function() {
        dispatch("core/editor").editPost({
          title: ""
        });
      }
    };
  })
])(SidebarContents);

// Plugin's representation
function MyTitlePlugin() {
  return el(
    Fragment,
    {},
    el(
      PluginSidebar,
      {
        name: "gew-title-sidebar",
        title: "My title plugin"
      },
      el(SidebarContentsWithDataHandling, {})
    ),
    el(
      PluginSidebarMoreMenuItem,
      {
        target: "gew-title-sidebar"
      },
      "My title plugin"
    )
  );
}

registerPlugin("gew-title-plugin", {
  // Icon which is going to be rendered in the More Menu and when the sidebar is pinned to the Header
  icon: "welcome-write-blog",
  render: MyTitlePlugin
});

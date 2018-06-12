var get = lodash.get;

var registerBlockType = wp.blocks.registerBlockType;
var el = wp.element.createElement;

// Select Data from the Data module
var withSelect = wp.data.withSelect;

registerBlockType("gew/dynamic-block", {
  title: "04 - Dynamic Block",
  icon: "welcome-learn-more",
  category: "common",

  edit: withSelect(function(select) {
    return {
      posts: select("core").getEntityRecords("postType", "post")
    };
  })(function(props) {
    var className = props.className;
    const post = get(props.posts, [0]);

    return el(
      "div",
      { className: className },
      !post && "loading",
      post && el("a", { href: post.link }, post.title.rendered)
    );
  }),

  // Save returns null, because the rendering happens on the backend.
  // We can use it to add fallback content in case the block is disabled.
  save: function() {
    return null;
  }
});

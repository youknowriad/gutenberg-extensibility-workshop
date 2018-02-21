import { get } from "lodash";

import { registerBlockType } from "@wordpress/blocks";

// Higher Order Component to make API requests
import { withAPIData } from "@wordpress/components";

import "./style.scss";

registerBlockType("gew/dynamic-block", {
  title: "04 - Dynamic Block",
  icon: "welcome-learn-more",
  category: "common",

  edit: withAPIData(() => {
    return {
      posts: "/wp/v2/posts?per_page=1"
    };
  })(({ className, posts }) => {
    const post = get(posts.data, [0]);

    return (
      <div className={className}>
        {!posts.data && "loading"}
        {posts.data && !post && "No poosts"}
        {post && <a href={post.link}>{post.title.rendered}</a>}
      </div>
    );
  }),

  // Save returns null, because the rendering happens on the backend.
  // We can use it to add fallback content in case the block is disabled.
  save() {
    return null;
  }
});

import { get } from "lodash";

import { registerBlockType } from "@wordpress/blocks";

// Select Data from the Data module
import { withSelect } from "@wordpress/data";

import "./style.scss";

registerBlockType("gew/dynamic-block", {
  title: "04 - Dynamic Block",
  icon: "welcome-learn-more",
  category: "common",

  edit: withSelect(select => {
    return {
      posts: select("core").getEntityRecords("postType", "post")
    };
  })(({ className, posts }) => {
    const post = get(posts, [0]);

    return (
      <div className={className}>
        {!post && "loading"}
        {!post && "No posts"}
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

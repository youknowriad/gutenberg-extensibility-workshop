/**
 * External dependencies
 */
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Main CSS loader for everything but blocks..
const cssExtractTextPlugin = new ExtractTextPlugin({
  filename: "./scripts/[name]/build/style.css"
});

// Configuration for the ExtractTextPlugin.
const extractConfig = {
  use: [
    { loader: "raw-loader" },
    {
      loader: "postcss-loader",
      options: {
        plugins: [require("autoprefixer")]
      }
    },
    {
      loader: "sass-loader",
      query: {
        outputStyle:
          "production" === process.env.NODE_ENV ? "compressed" : "nested"
      }
    }
  ]
};

const entryPointNames = [
  "01-intro-block",
  "02-static-block",
  "03-advanced-static-block",
  "04-dynamic-block",
  "05-meta-block",
  "06-remove-blocks-black-list",
  "07-remove-blocks-white-list",
  "08-extend-block",
  "09-sidebar-plugin"
];

const externals = {};
entryPointNames.forEach(entryPointName => {
  externals["@gew/" + entryPointName] = {
    this: ["gew", entryPointName]
  };
});

const wpDependencies = [
  "components",
  "element",
  "blocks",
  "hooks",
  "data",
  "editPost",
  "editor",
  "plugins"
];
wpDependencies.forEach(wpDependency => {
  externals["@wordpress/" + wpDependency] = {
    this: ["wp", wpDependency]
  };
});

const config = {
  entry: entryPointNames.reduce((memo, entryPointName) => {
    memo[entryPointName] = "./scripts/" + entryPointName + "/index.js";
    return memo;
  }, {}),
  externals,
  output: {
    filename: "scripts/[name]/build/index.js",
    path: __dirname,
    library: ["gew", "[name]"],
    libraryTarget: "this"
  },
  resolve: {
    modules: [__dirname, "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.s?css$/,
        use: cssExtractTextPlugin.extract(extractConfig)
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      )
    }),
    cssExtractTextPlugin,
    new webpack.LoaderOptionsPlugin({
      minimize: process.env.NODE_ENV === "production",
      debug: process.env.NODE_ENV !== "production"
    })
  ],
  stats: {
    children: false
  }
};

switch (process.env.NODE_ENV) {
  case "production":
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    break;

  default:
    config.devtool = "source-map";
}

module.exports = config;

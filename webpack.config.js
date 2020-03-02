const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  // what to do with those module files
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  //this will allow to import .ts files as modules
  resolve: {
    extensions: [".ts"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build")
  }
};

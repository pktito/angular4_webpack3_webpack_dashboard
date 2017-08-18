const path = require("path");
var DashboardPlugin = require('webpack-dashboard/plugin');

var config = {
  context: path.resolve("./src"),
  entry: {
    app: "./main.ts"
  },
  module: {
    rules: [
      { test: /\.ts/, loader: "ts-loader" },
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new DashboardPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    compress: true,
    port: 3000,
    hot: true
  }
};

module.exports = config;


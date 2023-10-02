const webpackCommon = require('./webpack.common');
const path = require("path");

module.exports = {
  ...webpackCommon,
  devServer: {
    open: true,
    watchFiles: [path.join(__dirname, "src/templates")],
    static: {
      directory: path.join(__dirname, 'public'),
    },
    client: {
      progress: true,
    },
    compress: true,
    port: 5000,
  },
  devtool: "inline-source-map",
  mode: "development"
};

const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");


module.exports = {
  mode: "production",
  entry: path.join(__dirname, "/client/src/index.jsx"),
  output: {
    path: path.join(__dirname, "/client/dist"),
    filename: "bundle.js",
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
      })
  ],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};

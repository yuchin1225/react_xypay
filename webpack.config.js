/* Webpack 設定檔 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  //development production
  mode: "development",
  entry: {
    index: "./src/index.jsx",
    // page1: "./src/pages/page1/page1.jsx",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    // filename: './js/bundle.[hash].js'
    filename: "./js/[name].[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-runtime"
              ]
            ]
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       name: "[name].[ext]",
        //       outputPath: "./img",
        //       //如果為 true，則將該檔案輸出, false，則僅在 CSS 內寫入 publicPath
        //       // emitFile: false
        //     },
        //   },
        // ],
      },
    ],
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./src/public/index.html",
      chunks: ["index"],
    }),
    // new HtmlWebpackPlugin({
    //   filename: "./page1.html",
    //   template: "./src/pages/page1/page1.html",
    //   chunks: ["page1"],
    // }),
    new MiniCssExtractPlugin({
      filename: "./css/[name].[hash].css",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery", //這邊以上是新增
    }),
  ],
  devServer: {
    //指定開啟port為9000
    port: 80
  },
};

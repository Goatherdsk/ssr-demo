const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader', // 如果你仍然想在开发环境中保留 style-loader，请注释掉此行
          'css-loader',
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()], // 代码压缩
  },
  plugins: [
    new CleanWebpackPlugin(), // 构建之前清理旧代码
    new MiniCssExtractPlugin({ // 将 css 拆分出去
      filename: '[name].[contenthash].css',
    }),
  ],
});
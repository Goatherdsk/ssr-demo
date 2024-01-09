const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ // 为 webpack 生成一个html
      filename: "index.html", // 生成的文件名
      template: "./public/index.html" // 指定的模版
    })
  ],
  devServer: {
    static: { // 指定静态文件
      directory: path.join(__dirname, 'public'),
    },
    compress: true, // 使用gzip 压缩
    port: 3000, // 指定开发服务器端口号
  },
}
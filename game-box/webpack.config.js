const CSSPlugin = require('mini-css-extract-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/js/index.js'],
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/i,
        use: [
          CSSPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HTMLPlugin({
      template: './src/index.html',
    }),
    new CSSPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    compress: true,
    port: 3000,
    host: 'localhost',
    open: false,
  }
}



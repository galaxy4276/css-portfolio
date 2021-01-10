const CSSPlugin = require('mini-css-extract-plugin');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/js/index.js'],
  output: {
    path: __dirname + 'dist',
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
    contentBase: './src',
    hot: true,
    compress: true,
    port: 3000,
    host: 'localhost',
    open: false,
  }
}



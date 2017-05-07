import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';

import path from 'path';

module.exports = {
  entry: {
    application: [
      'babel-polyfill',
      path.resolve('src/index.jsx'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name]_bundle.js',
    sourceMapFilename: '[name].map',
    publicPath: '/public'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new WebpackNotifierPlugin(),
    new HtmlWebpackPlugin({
      title: 'Spotify Player',
      template: 'src/index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
    clientLogLevel: 'info',
  },
};

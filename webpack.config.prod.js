const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/TOP_to_do_app/', 
  },
  watch: true,
  module: {
   rules: [
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
     {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
     },
      {
        test: /\.html$/i,
        loader: "html-loader",
        exclude: path.resolve(__dirname, './src/index.html'),
        exclude: path.resolve(__dirname, './dist/index.html'),
      },
   ],
  },


   devServer: {
      compress: true,
      disableHostCheck: true, // That solved .
      quiet: false,
      noInfo: false,
      stats: {
         // Config for minimal console.log mess.
         colors: true,
         version: false,
         hash: false,
         timings: false,
         chunks: false,
         chunkModules: false

      }
   }

};

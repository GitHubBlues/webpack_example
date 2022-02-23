const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [new HtmlWebpackPlugin()],
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
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',

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

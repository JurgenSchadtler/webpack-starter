const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
 
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
        {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
                attributes: false,
                minimize: false
            },
        },
        {
            test: /\.css$/,
            exclude: /styles.css$/,
            use: [ 'style-loader' , 'css-loader']
        },
        {
            test: /styles.css$/,
            use: [ MiniCssExtract.loader, 'css-loader' ]
        },
        {
            test: /\.(png|jpe?g|gif)$/,
            loader: 'file-loader'
        }
    
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        templante: './src/index.html',
        filename: './index.html'
    }),

    new MiniCssExtract({
        filename: '[name].css',
        ignoreOrder:false
    }),

    new CopyPlugin({
        patterns: [
        { from: 'src/assets/', to: 'assets/'}
        ]
    })
  ]
};
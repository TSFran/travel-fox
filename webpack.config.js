var path = require('path');
var webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// var BUILD_DIR = path.resolve(__dirname + 'public');
// var build_dist = path.join(__dirname, 'dist');
// var APP_DIR = path.resolve(__dirname + 'src');

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Travel-Fox',
    template: './public/index.html'
  })
]

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: './src/index.tsx',
    vendor: ['react', 'react-dom', 'styled-components']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@app': path.resolve(__dirname)
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: 'awesome-typescript-loader'
      },
      {
        test: /\.(jpe?g|png|svg|woff2|woff|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: plugins
}
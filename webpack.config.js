function createVarsDefinePlugin(vars) {
  let newVars = {};
  for (let key in vars) {
    newVars['process.env.' + key] = JSON.stringify(vars[key]);
  }
  return newVars;
}

var path = require('path');

var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pathEnv = './.env.local';
const dotenv = require('dotenv').config({
  path: pathEnv
})
const vars = require('dotenv-expand')(dotenv).parsed;
vars['NODE_ENV'] = process.env.NODE_ENV;
const varsDefinePlugin = createVarsDefinePlugin(vars);
const publicPath = 'http://localhost:3000/';

// var BUILD_DIR = path.resolve(__dirname + 'public');
// var build_dist = path.join(__dirname, 'dist');
// var APP_DIR = path.resolve(__dirname + 'src');

const plugins = [
  new webpack.DefinePlugin(varsDefinePlugin),
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
    filename: '[name].js',
    publicPath: publicPath
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
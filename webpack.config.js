const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const nodeModules = {};

fs.readdirSync(path.resolve(__dirname, 'node_modules'))
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; });

module.exports = {
  context: path.resolve(__dirname, './src'),

  externals: nodeModules,

  entry: {
    app: './server.ts'
  },

  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      // TypeScript
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  }
};

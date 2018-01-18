const path = require('path');

const SRC_PATH = path.join(__dirname, '../src');
const CONFIG_PATH = path.join(__dirname, '../.storybook');
const MILLIGRAM_PATH = path.join(__dirname, '../node_modules/milligram/');
const REACT_SELECT_PATH = path.join(__dirname, '../node_modules/react-select/');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: [SRC_PATH, CONFIG_PATH]
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        include: SRC_PATH
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        include: [SRC_PATH, MILLIGRAM_PATH, REACT_SELECT_PATH]
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
        include: SRC_PATH
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    enforceExtension: false
  }
};

const path = require('path');

module.exports = {
  entry: './src/index.ts',

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: {
      name: 'Colour',
      type: 'umd',
    }
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },

  resolve: {
    extensions: ['.ts'],
  },
};

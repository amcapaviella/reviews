const path = require('path');
module.exports = {
 entry: path.join(__dirname, './client/src/index.js'),
 output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'client/dist'),
 },
 module: {
  rules: [
    {
      test: /.js$|.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      },
    },
    {
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      ],
    },
  ],
 },
};
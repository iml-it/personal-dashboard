let path = require('path');

module.exports = [
  {
    entry: './src/styles/app.scss',
    output: {
      // This is necessary for webpack to compile
      // But we never use style-bundle.js
      filename: 'style-bundle.js',
      path: path.resolve(__dirname + '/public_html'),
      publicPath: '/',
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
            }
          },
        ]
      }]
    },
  },
  {
    entry: "./src/app/app.js",
    output: {
      filename: "bundle.js"
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }]
    },
    devServer: {
      contentBase: './src/public',
    },
  },
];

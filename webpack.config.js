const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './src/app.js',
    output: {
      path: outputPath,
      filename: 'bundle.js'
    },
    resolve: {
      fallback: {
        "stream": require.resolve("stream-browserify"),
        "fs": false
      }
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    }
  };
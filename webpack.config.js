const path = require('path');
module.exports = {
  entry: './server/client/components/app.jsx',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'server/public'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: 'auto',
    client: {
      logging: 'none'
    },
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.scss?$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|svg|gif)?$/,
        use: 'file-loader?name=./img/[name].[ext]'
      },
      {
        test: /\.(wav|mp3|mp4|m4a)$/i,
        use: 'file-loader?name=./assets/audio/[name].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    })
  ],
  stats: {
    children: true
  }
}

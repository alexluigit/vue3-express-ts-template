const HTMLWebpackPlugin = require('html-webpack-plugin')
const { join } = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const { HotModuleReplacementPlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const configureAPI = require('./src/server/configureAPI')

module.exports = {
  mode: 'development',
  entry: join(__dirname, './src/client/main.js'),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'app.bundled.js'
  },
  devServer: {
    before: configureAPI,
    port: 8000,
    hot: true,
    open: false,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      showErrors: true,
      cache: true,
      title: 'Vue with Webpack',
      favicon: join(__dirname, 'public', 'favicon.ico'),
      template: join(__dirname,'public', 'index.html')
    })
  ]
}

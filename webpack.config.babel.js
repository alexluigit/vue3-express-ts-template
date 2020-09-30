import HTMLWebpackPlugin from 'html-webpack-plugin'
import {join} from 'path'
import {VueLoaderPlugin} from 'vue-loader'
import {HotModuleReplacementPlugin} from 'webpack'
import {CleanWebpackPlugin} from 'clean-webpack-plugin'
import configureAPI from './src/server/configureAPI'

export default {
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

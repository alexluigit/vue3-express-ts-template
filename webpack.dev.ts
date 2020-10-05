import {join} from 'path'
import {HotModuleReplacementPlugin} from 'webpack'
import common from './webpack.common'
import merge from 'webpack-merge'
import configureAPI from './src/server/configureAPI'

export default merge(common, {
  mode: 'development',
  output: {
    path: join(__dirname, 'dist'),
    filename: "[name].bundled.js"
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
  ]
})

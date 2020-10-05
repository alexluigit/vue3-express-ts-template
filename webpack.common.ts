import {join} from 'path'
import {VueLoaderPlugin} from 'vue-loader'
import HTMLWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: join(__dirname, './src/client/main.ts'),
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      favicon: join(__dirname, 'public', 'favicon.ico'),
      template: join(__dirname,'public', 'index.html')
    })
  ]
}

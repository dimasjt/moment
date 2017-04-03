import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import path from 'path'

import defaultConfig from './base'

const appPath = path.resolve(__dirname, '../../app')

const config = Object.assign(defaultConfig, {
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(appPath, 'views/index.tpl.html'),
      inject: 'body',
      filename: 'index.html',
    }),
  ],
})

export default config

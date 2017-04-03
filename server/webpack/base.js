import path from 'path'

const appPath = path.resolve(__dirname, '../../app')

module.exports = {
  entry: {
    application: [
      path.resolve(appPath, 'components/index.js'),
    ],
  },
  output: {
    path: path.resolve(__dirname, '../assets/'),
    filename: '[name]_bundle.js',
    sourceMapFilename: '[name].map',
    publicPath: '/assets',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader'],
      },
    ],
  },
}

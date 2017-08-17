const path = require('path')
const webpack = require('webpack')

module.export = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output{
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  }
  plugins: [
    new webpack.optimize.Dedupeplugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('productions')
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js?/,
        loader: 'babel',
        exclude: path.join(__dirname, 'modules')
      },
      {
        text: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src', style)
      }
    ]
  }
}

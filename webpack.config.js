const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  // source-map
  devtool: 'inline-source-map',
  // 热重载
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'output Management',
      lang: 'zh-CN'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
  // resolve: {
  //   // 设置路径别名
  //   alias: {
  //     '@': path.resolve(__dirname, 'src/assets/')
  //   }
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: ['style-loader', 'css-loader']
  //     },
  //     {
  //       test: /\.(jpg|png|gif|svg)$/,
  //       use: ['file-loader']
  //     },
  //     {
  //       test: /\.(woff|woff2|eot|ttf|otf)$/,
  //       use: ['file-loader']
  //     },
  //     {
  //       test: /\.(csv|tsv)$/,
  //       use: ['csv-loader']
  //     },
  //     {
  //       test: /\.xml$/,
  //       use: ['xml-loader']
  //     }
  //   ]
  // }
}

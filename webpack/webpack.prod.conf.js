const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = require('../config')

const publicPath = '/'

function resolve() {
  return path.resolve(__dirname, '..')
}

const projectRootPath = path.resolve(__dirname, '../')
const assetsPath = path.resolve(projectRootPath, './dist')

module.exports = {
  mode: 'production',
  devtool: 'false',
  context: path.resolve(__dirname, '..'),
  entry: {
    naruto: "components/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
    publicPath: publicPath,
    // https://doc.webpack-china.org/configuration/output#output-librarytarget
    library: 'naruto',
    libraryTarget: 'umd' // 在 AMD 或 CommonJS 的 require 之后可访问
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      components: resolve()  + '/components',
      types: resolve() + '/types'
    }
  },
  // 排除两个依赖
  externals: [
    'react',
    'react-dom'
  ],

  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.tsx?$/,
        loader: require.resolve('ts-loader'),
        exclude: /node_modules/
      },
      {
        test: /\.md$/,
        loader: require.resolve('raw-loader')
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader?importLoaders=2', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(png|jpg)$/, loader: 'url-loader?limit=10240'
      }
    ]
  },
  plugins: [
    new CleanPlugin([assetsPath], { root: projectRootPath }),
    process.env.NODE_ENV === 'analyse' ? new BundleAnalyzerPlugin() : () => {},
    // css files from the extract-text-plugin loader
    // new ExtractTextPlugin({filename: '[name].css', allChunks: true}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
      IS_CLIENT: true,
      IS_SERVER: false,
      IS_DEVELOPMENT: false,
      ENABLE_DEVTOOLS: false
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJsPlugin({
      sourceMap: true,
      parallel: true,
      uglifyOptions: {
        output: {
          comments: false
        },
        compress: {
          warnings: false
        }
      }
    })
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}

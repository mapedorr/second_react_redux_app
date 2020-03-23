const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.resolve('src/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        // Don't use .babelrc in `yarn link`-ed dependency's directory and use in current direction instead
        loader:
          'babel-loader?babelrc=false&extends=' +
          path.resolve(__dirname, '.babelrc')
      },
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'style-loader' // Creates style nodes from JS strings
          },
          {
            loader: ExtractCssChunks.loader,
            options: {
              hmr: true
            }
          },
          {
            loader: 'css-loader' // Translates CSS into CommonJS
          },
          {
            loader: 'stylus-loader' // Compiles Stylus to CSS
          }
        ]
      },
      {
        // Apply rule for font files
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            // Using file-loader too
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts',
              esModule: false // With this is not necessary to import the fonts as a module
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractCssChunks({
      filename: 'bundle.css'
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  },
  resolveLoader: {
    modules: ['node_modules']
  }
};

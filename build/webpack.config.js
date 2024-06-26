const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const { resolve } = require('./utils')

/**
 * @type { webpack.Configuration }
 */
const webpackConfig = {
  mode: process.env.NODE_ENV,
  target: 'web',
  entry: './src/main.js',
  output: {
    path: resolve('./dist'),
    filename: '[name].[fullhash:7].js'
  },
  resolve: {
    alias: {
      root: resolve(),
      vue$: 'vue/dist/vue.esm-bundler.js',
      '@': resolve('./src')
      // Non-essential, turn it on when using npm link
      // vue: resolve('./node_modules/vue')
    },
    extensions: ['*', '.js', '.vue', '.json']
    // Non-essential, turn it on when using npm link
    // symlinks: false
  },
  devServer: {
    open: true,
    port: 8000,
    historyApiFallback: true
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            extends: resolve('babel.config.js')
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass')
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
        loader: 'url-loader',
        exclude: /node_modules/,
        options: {
          limit: 10000,
          esModule: false,
          name: '[name].[fullhash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        exclude: /node_modules/,
        options: {
          limit: 10000,
          name: '[name].[fullhash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        exclude: /node_modules/,
        options: {
          limit: 10000,
          name: '[name].[fullhash:7].[ext]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|woff2?|eot|ttf|otf|mp4|webm|ogg|mp3|wav|flac|aac)(\?\S*)?$/,
        loader: 'file-loader',
        include: /node_modules/,
        options: {
          name: '[name].[ext]?[fullhash]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './public/favicon.ico',
      template: './public/index.html'
    }),
    new VueLoaderPlugin(),
    new webpack.LoaderOptionsPlugin({
      vue: {
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false
    })
  ],
  optimization: {
    minimizer: []
  },
  devtool: 'eval-source-map'
}

module.exports = webpackConfig

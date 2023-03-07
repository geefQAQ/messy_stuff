const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

const webpackConfig = {
  entry: {
    app: './src/main.js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[hash].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "@utils": path.resolve(__dirname, 'src/utils'),
      "@service": path.resolve(__dirname, 'src/service'),
      "@views": path.resolve(__dirname, 'src/views'),
    },
  },
  output: {
    filename: '[name]_[chunkhash:6].js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      title: 'My App',
    }),
    new DefinePlugin({
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_OPTIONS_API__: false,
    }),
    function() {
      // this为compile对象
      // this.hooks.done.tap('done', stats => {
      //   if(stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1) {
      //     console.log('build error');
      //     process.exit(1);
      //   } else {
      //     console.log('test', process.argv);
      //     process.exit(2);
      //   }
      // })
    }
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 9000,
  },
  stats: 'normal',
}

module.exports = webpackConfig;
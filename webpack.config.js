const webpack = require('webpack')
const path = require('path')

const appPath = path.resolve(__dirname, 'app')
const libPath = path.join(appPath, 'lib')

module.exports = {
  entry: './app/index.tsx',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[local]_[hash:base64:3]',
              },
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      lib: libPath,
    },
    extensions: ['*', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './dist',
    hot: true,
    compress: true,
    historyApiFallback: true,
    open: true,
  },
}

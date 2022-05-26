const path = require('path');
const Dotenv = require('dotenv-webpack');
const { webpack } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: 'development',
  devtool:'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@context': path.resolve(__dirname, 'src/context/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@logos': path.resolve(__dirname, 'src/assets/logos/'),
      '@img': path.resolve(__dirname, 'src/assets/img/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new Dotenv({
      path: './.env',
      safe: true,
      systemvars: true,
      defaults: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT_ID_PP: process.env.CLIENT_ID_PP,
      },
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true,
    },
    watchFiles: path.join(__dirname, './**'),
    compress: true,
    historyApiFallback: true,
    port: 3005,
    open: true,
  },
};

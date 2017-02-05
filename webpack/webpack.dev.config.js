const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const autoprefixer = require('autoprefixer');

const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();

const config = {
  debug: true,
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000/', // Needed for hot reloading
    'webpack/hot/only-dev-server',
    __dirname + '/../src/app/index.js',
    __dirname + '/../src/style/main.less',
  ],
  output: {
    path: __dirname + '/../dist',
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'],
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader'),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?(\?[0-9]*)?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?(\?[0-9]*)?$/, loader: 'file-loader' },
      { test: /\.(html)(\?v=[0-9]\.[0-9]\.[0-9])?(\?[0-9]*)?$/, loader: 'html-loader' },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=10000' },
      {  test: /\.csv$/, loader: 'raw-loader' },
    ],
  },
  postcss: [ autoprefixer ],
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/../src/app/index.ejs',
      inject: false,
      minify: false,
      appMountId: 'root',
      title: 'Test Summary',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new DashboardPlugin(dashboard.setData),
  ],
  progress: true,
  colors: true,
};

module.exports = config;

var path = require('path');
var webpack = require('webpack');

var config = {
  mode: "development",
  entry: {
    Slicknav: './components/slicknav.jsx'
  },
  resolve: {
    extensions: [".jsx", '.js']
  },
  output: {
    path: path.join(__dirname, "dist/js/"),
    filename: "[name].js"
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types'
    },
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-react"]
        },
        include: [path.join(__dirname, 'components'), path.join(__dirname, 'src')],
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['css-loader', 'sass-loader']
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/, loader: "file-loader"
      },
      {
        test: /\.json$/,
        exclude: path.join(__dirname, 'node_modules'),
        loader: 'json-loader'
      }
    ]
  }
};

module.exports = config;

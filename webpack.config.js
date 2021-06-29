var path = require('path');
var webpack = require('webpack');

var config = {
  mode: "production",
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

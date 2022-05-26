'use strict';

let path = require('path');

module.exports = {
  //est variant development i production, snachala vo vremya razrabotki dev ,a posle progonyaem production
  mode: 'development',
  //faul s kotorogo nachinaem- fail v kotorom propisivaetsya vse zavisimosti require ili import iz novogo standarta
  entry: './js/script.js',
  //fail obj,fail kotorii viidet v itoge
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  //if tru - otsleshivaet izmenenie failov i na avtomate sobirat proekt pri ctrl + s
  watch: true,
//informaciya ob ishodnikah,chtob drugie mogli chitat kod
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
                debug: true,
                corejs: 3,
                useBuiltIns: "usage"
            }]]
          }
        }
      }
    ]
  }
};
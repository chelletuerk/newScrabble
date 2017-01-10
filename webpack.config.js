const path = require('path');

module.exports = {
  entry: {
    main: ['babel-polyfill', './lib/index.js'],
    test: ['babel-polyfill', 'mocha!./test/index.js'],
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
  },
  module: {
    noParse: [
        /node_modules\/sinon\//,
    ]
},
resolve: {
    alias: {
        'sinon': 'sinon/pkg/sinon',
    }
},
externals: {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
},
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css'],
  },
};

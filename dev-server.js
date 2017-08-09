var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config.js');

var restService = 'http://localhost:9000';

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  contentBase: 'dist/',
  stats: {
    colors: true
  },
  proxy: {
    '/search': {
      target: restService,
      secure: false
    },
    '/metadata': {
      target: restService,
      secure: false
    },
    '/app-info': {
      target: restService,
      secure: false
    },
    '/user-info': {
      target: restService,
      secure: false
    },
    '/logout': {
      target: restService,
      secure: false
    }
  }
});
server.listen(8090, 'localhost', function () {
});

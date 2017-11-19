import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

import proxy from 'http-proxy-middleware';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use('/jira', proxy({
  target:'http://192.168.99.100:32769',
  changeOrigin: true,
  secure: false,
  pathRewrite: {'^/jira' : ''}
}));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors')
const axios = require('axios')
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware')

// ----- Require routes ------
const index = require('./Routes/index')

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Parse request of content application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parser request of content application/json
app.use(bodyParser.json());

// Cookie-Parser
app.use(cookieParser());


// Webpack Server
const webpackCompiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(webpackCompiler, {
  publicPath: webpackConfig.output.publicPath,
  status: {
    color: true,
    chunks: true,
    'errors-only': true,
  },
}));
app.use(webpackHotMiddleware(webpackCompiler, {
  log: console.log,
}));

app.use(cors())
var axData = []
axios.get('https://s3.ap-south-1.amazonaws.com/scapic-others/json/models.json')
        .then(response => {
          console.log(response.data.categories[0].models)})

app.get('/api/data', (req, res) => {
  res.json(daata)
})
// ---- use routes----
app.use('/*', index);


module.exports = app;
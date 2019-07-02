'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var bp = require("body-parser").json({limit: '100mb'});
const helmet = require('helmet')
const rateLimit = require("express-rate-limit");
var config = {
  appRoot: __dirname
};
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 200
});
app.use(bp);
app.use(limiter);
app.use(helmet())
app.use(helmet.xssFilter())
app.use(helmet.frameguard())

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }
  swaggerExpress.register(app);
  var moment = require('moment')

  var currDateTime =  moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
  console.log(currDateTime)


  var port = process.env.PORT || 10010;
  app.listen(port);
  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});

module.exports = app;
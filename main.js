var express = require('express'),
  api = require('./routes/api');

var app = express();

app.configure(function() {
  this.use(express.errorHandler({dumpException: true, showStack: true}));
  this.use(express.bodyParser());
  this.use(app.router);
});

app.get('/search/:category/:subject', api.searchCategorySubject);
app.get('/search/:category/price/:condition/:price', api.searchCategoryPrice);
app.post('/search', api.searchParams);

app.listen(3333);

var express = require('express'),
  api = require('./routes/api'),
  bodyParser = require('body-parser');

var app = express();

app.use(express.errorHandler({dumpException: true, showStack: true}));
app.use(bodyParser());
app.use(app.router);

app.get('/search/:category/:subject', api.searchCategorySubject);
app.get('/search/:category/price/:condition/:price', api.searchCategoryPrice);
app.post('/search', api.searchParams);

app.listen(3333);

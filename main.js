var express = require('express'),
  api = require('./routes/api'),
  bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

app.get('/search/:category/:subject', api.searchCategorySubject);
app.get('/search/:category/price/:condition/:price', api.searchCategoryPrice);
app.post('/search', api.searchParams);

app.listen(3333);

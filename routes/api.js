//Help:
////https://github.com/apocas/node-olx
////http://expressjs.com/3x/api.html


exports.searchCategorySubject = function (req, res) {
  console.log(req.params.category);
  console.log(req.params.subject);
  
  //code ...

  res.status(500).json({'status': 'nok', 'message': 'to be implemented...'});
};

exports.searchCategoryPrice = function (req, res) {
  console.log(req.params.category);
  console.log(req.params.subject);

  //code ...

  res.status(500).json({'status': 'nok', 'message': 'to be implemented...'});
};

exports.searchParams = function (req, res) {
  console.log(req.body.category);
  console.log(req.body.subject);
  console.log(req.body.price);
  console.log(req.body.city);

  //code ...

  res.status(500).json({'status': 'nok', 'message': 'to be implemented...'});
};

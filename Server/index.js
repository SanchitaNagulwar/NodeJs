
var restify = require('restify');

var server = restify.createServer();

server.use(restify.plugins.bodyParser());

server.post('/create', function(req, res, next) {
    const data = req.body;
    console.log(data);
    res.send(data);
    return next();
  
  });


server.get('/hello', function (req, res, next) {
    // const data = req.body;
    // console.log(data);
    res.send({name: 'sanchita'});
     next();
});



server.listen(8080, function () {
  console.log('ready on %s', server.url);
});








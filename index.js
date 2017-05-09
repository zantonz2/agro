var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/Public'));

app.get('/', function(request, response) {
  response.render('Public/index.html');
});

app.listen(app.get('port'), function () {
  console.log('Server listening on port', app.get('port'));
});
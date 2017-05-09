var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname);

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(app.get('port'), function () {
  console.log('Server listening on port', app.get('port'));
});
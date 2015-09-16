//test - can I add this??
var app = require('./server.js');

var port = process.env.PORT;

app.listen(port);

console.log('Server now listening on port ' + port);

// run with 'node server.js' to
// serve files in current directory
// view demo with URL: 'http://localhost:3333/demo/demo.html'
var connect = require('connect');
connect.createServer(connect.static(__dirname)).listen(3333);
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

app.use(express.static('../src'));
app.use(bodyParser.json());

global.planes = [];

app.get('/', function(req, res){
  res.sendfile('src/index.html');
});

app.get('/planes', function(req, res) {
  res.send(global.planes);
});

app.get('/plane', function(req, res) {
  var rand = global.planes[Math.floor(Math.random() * global.planes.length)];
  console.log(rand);
  res.send(JSON.stringify(rand));
});

app.post('/planes', function (req, res) {
  global.planes.push([req.body.message,req.body.emotion]);
  console.log(global.planes);
  res.send('Success');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('eval', function(msg){
      io.emit('evalClient', msg);
  });

  socket.on('statsClient', function(msg){
      io.emit('stats', msg);
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

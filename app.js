var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var firebase = require("firebase");

app.use(express.static('src/'));
app.use(bodyParser.json());

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAz_1Ugtj_azmt6eBLadwIwJ4qur8JHGJc",
  authDomain: "whoosh-8fb7e.firebaseapp.com",
  databaseURL: "https://whoosh-8fb7e.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "104053919217"
};
firebase.initializeApp(config);

var database = firebase.database();

var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var tone_analyzer = new ToneAnalyzerV3({
  username: 'e3baf6c1-b0fa-4874-ba72-65acc8b53e7b',
  password: 'PZe6vfP63Ecc',
  version_date: '2016-05-19'
});

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

app.get('/joy', function(req, res) {
  array = [];
  for (plane in global.planes) {
    if (global.planes[plane][1] === "joy") {
      array.push(global.planes[plane]);
    }
  }
  emptyMessage = ["None of that type currently exists", "nothing"];
  if(array.length > 0){   
      //this array is not empty 
  }else{
    array.push(emptyMessage);
  }
  var rand = array[Math.floor(Math.random() * array.length)];
  res.send(JSON.stringify(rand));
});

app.get('/fear', function(req, res) {
  array = [];
  for (plane in global.planes) {
    if (global.planes[plane][1] === "fear") {
      array.push(global.planes[plane]);
    }
  }
  emptyMessage = ["None of that type currently exists", "nothing"];
  if(array.length > 0){   
      //this array is not empty 
  }else{
    array.push(emptyMessage);
  }
  var rand = array[Math.floor(Math.random() * array.length)];
  res.send(JSON.stringify(rand));
});

app.get('/sadness', function(req, res) {
  array = [];
  for (plane in global.planes) {
    if (global.planes[plane][1] === "sadness") {
      array.push(global.planes[plane]);
    }
  }
  emptyMessage = ["None of that type currently exists", "nothing"];
  if(array.length > 0){   
      //this array is not empty 
  }else{
    array.push(emptyMessage);
  }
  var rand = array[Math.floor(Math.random() * array.length)];
  res.send(JSON.stringify(rand));
});

app.get('/disgust', function(req, res) {
  array = [];
  for (plane in global.planes) {
    if (global.planes[plane][1] === "disgust") {
      array.push(global.planes[plane]);
    }
  }
  emptyMessage = ["None of that type currently exists", "nothing"];
  if(array.length > 0){   
      //this array is not empty 
  }else{
    array.push(emptyMessage);
  }
  var rand = array[Math.floor(Math.random() * array.length)];
  res.send(JSON.stringify(rand));
});
app.get('/angry', function(req, res) {
  array = [];
  for (plane in global.planes) {
    if (global.planes[plane][1] === "angry") {
      array.push(global.planes[plane]);
    }
  }
  emptyMessage = ["None of that type currently exists", "nothing"];
  if(array.length > 0){   
      //this array is not empty 
  }else{
    array.push(emptyMessage);
  }
  var rand = array[Math.floor(Math.random() * array.length)];
  res.send(JSON.stringify(rand));
});

app.post('/analyze', function (req, res) {
  console.log(req.body);
  tone_analyzer.tone({ text: req.body.message },
    function(err, tone) {
      if (err)
        console.log(err);
      else
        var max = 0;
        var emotion = "";
        for (i in tone.document_tone.tone_categories[0].tones) {
          if (tone.document_tone.tone_categories[0].tones[i].score > max ) {
            max = tone.document_tone.tone_categories[0].tones[i].score;
            emotion = tone.document_tone.tone_categories[0].tones[i].tone_id;
          }
        }
        console.log(max);
        console.log(emotion);
        console.log(tone.document_tone.tone_categories[0]);
        res.send(emotion);
  });
});


app.post('/planes', function (req, res) {
  console.log(req.body);
  console.log(req.body.message);
  global.planes.push([req.body.message,req.body.emotion]);
  console.log(global.planes);
  res.send('Success');
});

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

http.listen(3000, function(){
  console.log('listening on *:3000');
});

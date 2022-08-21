const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/newdata');
var db=mongoose.connection;
db.on('error', console.log.bind(console, 'connection error'));
db.once('open', function(callback){
 console.log('connection succeeded');
})
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_development');
const db = mongoose.connection;

db.on('error',console.error.bind("Error in connecting to mongodb!!! "));
db.once('open',function(){
    console.log("Database is connected successfully :: MongoDB");
})
module.exports = db;
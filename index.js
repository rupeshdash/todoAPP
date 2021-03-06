const express = require("express");
const app = express();
const port  = 8000;
const db = require('./config/mongoose');
const Task = require('./models/task');
app.use(express.urlencoded());
//middleware to control the routes
app.use('/',require('./routes/index'));




app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('./assets'));

app.listen(port, function(err){
    if(err){
        console.log(`Error : ${err}`);
        return;
    }
    console.log(`Server is running successfully on port : ${port}`);
})



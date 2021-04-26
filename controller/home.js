const Task = require("../models/task");


module.exports.task = function(req,res){
    // console.log(req.body);
    
    // taskList.push(req.body);
    // console.log(taskList);
    // return res.redirect('back');

    Task.create({
        task : req.body.task,
        preference : req.body.preference,
        date : req.body.date,
    },function(err,newTask){
        if(err){console.log('Error creating database!!'); return;}
        console.log("****************",newTask);
        return res.redirect('back');
    });
   
}

module.exports.home = function(req,res){
   
    Task.find({},function(err,task){
        if(err){
            console.log("Error in fetching tasks");
            return;
        }

        return res.render('home',{
            title:'home',
            task_list : task
            
        });
    });

    
}

// controller to the post request recieved from the task submission form

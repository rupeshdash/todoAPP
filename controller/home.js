const Task = require("../models/task");


// controller to the post request recieved from the task submission form
module.exports.task = function(req,res){
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
module.exports.delete = function(req,res){
    let id = req.query.id;
    console.log(id);
   
    Task.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Cannot delete the task");
            return;
        }

        return res.redirect('back');
    })
}


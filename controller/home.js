
const taskList = [];
module.exports.task = function(req,res){
    console.log(req.body);
    
    taskList.push(req.body);
    console.log(taskList);
    return res.redirect('back');
   
}

module.exports.home = function(req,res){
   
    return res.render('home',{
        title:'home',
        task_list : taskList
        
    });
}

// controller to the post request recieved from the task submission form

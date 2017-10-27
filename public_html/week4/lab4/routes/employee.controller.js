
var Employee = require('./employee.model');
var debug = require('debug')('lab4:employee');

module.exports.home = function(req, res){
        
    if (req.method === 'POST') {
        
       var msg = '';

        Employee.create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          department: req.body.department,
          startDate: req.body.startDate,
          jobTitle: req.body.jobTitle,
          salary: req.body.salary
        })
        .then(function(){
            msg = 'Employee Saved';
            return;
        })
        .catch(function(err){
            msg = 'Employee not saved';
            return err.errors;
        })
        .then(function(err){
            res.render('index', {
                message : msg,
                errors: err
             });
        });   
              
    } else {
        res.render('index', {
            message : ''
        }); 
    }
     
};

module.exports.view = function(req, res){

       Employee
       .find()
       .exec()
       .then(function(results){
            res.render('view', { 
                title: 'View Results',
                results : results,
            });
       });

    

};

module.exports.delete = function(req, res){

    var id = req.params.id,
        removed = '';

        Employee.remove({ _id: id })
            .then(function(){
                removed = `${id} has been removed`;
                return;
            })
            .catch(function (err) {
                removed = `${id} has not been removed`;
                return err;
            })
            .then( (err) => {   //alternative function syntax
                res.render('delete', {
                    removed : removed
                });

        });


};


module.exports.update = function(req, res){
    
    var id = req.params.id;
    var msg = '';
    
    if (req.method === 'POST') {
         
        id = req.body._id;

        Employee
            .findById(id)
            .exec() 
            .then(function(reviewData) {
                // figure out why the data is not saving.        
                reviewData.author = req.body.author;
                reviewData.rating = req.body.rating;
                reviewData.reviewText = req.body.reviewText;

                debug(req.body);
                return reviewData.save();
                                
            })
            .then(function(){
                msg = 'data has been updated';
            })
            .catch(function(){
                msg = 'data has NOT been updated';
            });
        
    }
        
    Employee
    .findOne({ '_id': id })
    .exec()
    .then(function(results){    
        res.render('update', { 
            title: 'Update Results',
            message: msg,
            results : results
        });
    })
    .catch(function(){
        res.render('notfound', { 
            message: 'Sorry ID not found'
        });
    });
};
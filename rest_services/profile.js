var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Profile = require('./model/profile');

router.get('/availablity', function( req, res, next ){
    console.log(req.query);
    if (req.query.userID != undefined){
        Profile.countDocuments({"userID":req.query.userID},function(err, rec){
            if (rec == 0){
                res.send(true);
            }
            else{
                res.send(false);
            }
        });
    }
    else{
        res.sendStatus(400);
    }
});


module.exports = router;
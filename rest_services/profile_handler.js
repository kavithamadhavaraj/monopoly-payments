var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Profile = require('./model/profile');

router.get('/availability', function( req, res, next ){
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

router.post('/create', function( req, res, next ){
    const userData = req.body;
    console.log('Creating profile', userData);
    const profile = new Profile({
        userID: req.query.userID,
        name: userData.name,
        email: userData.email,
        provider: userData.provider,
        image: userData.image
    });
    profile.save(function (err, results) {
        res.send(results);
    });
});

router.get('/find', function( req, res, next ){
    if (req.query.email != undefined){
        console.log("Searching...",req.query.email);
        Profile.findOne({"email":req.query.email},function(err, rec){
            if (rec != null){
                console.log(rec);
                res.send(rec);
            }
            else{
                res.send(null);
            }
        });
    }
    else{
        res.sendStatus(400);
    }
});

module.exports = router;
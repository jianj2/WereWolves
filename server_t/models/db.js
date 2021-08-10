const mongoose = require('mongoose');

const path = require("path");

const url = require(path.join(__dirname,'..','database/access')).MongoURI;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(url, options, function(err){
    if(!err){
        console.log("connected to the DB");
    }else{
        console.log('mongoose error', err);
    }
});

require('./game');
require('./manager');
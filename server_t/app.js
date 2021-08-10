const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

require('./models/db.js');


const cors = require('cors');
app.use(cors());

const managerRouter = require('./routes/managerRoutes');
const sampleRouter = require('./routes/index');

app.use('/manager',managerRouter);
app.use('/',sampleRouter);

const port = process.env.PORT || 8080;
app.listen(port,function(req,res){
    console.log("server is running on port : " + port + " !");
});
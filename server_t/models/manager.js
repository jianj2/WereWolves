const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const managerSchema = Schema({
    //'userId': { type: String, required:true, lowercase:true, unique:true, trim:true},
    'username':String,
    'password':String
})

mongoose.model('manager', managerSchema);
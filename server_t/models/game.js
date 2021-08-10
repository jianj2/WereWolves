const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = Schema({
    //'userId': { type: String, required:true, lowercase:true, unique:true, trim:true},
    'roomNumber' : String,
    'roles':[''],
    'lang': String,
    'yu': String,
    'wu':String,
    'shou':String,
    'qiang':String,
    'vote':['']
})

mongoose.model('game', gameSchema);
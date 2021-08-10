const mongoose = require('mongoose');
const Manager = mongoose.model('manager');
const Games = mongoose.model('game');

const getAllManager = (req, res) => {
    console.log("test for getting all managers");
    Manager.find((err, manager) => {
        if(!err) {
            console.log(manager);
            res.send(manager);
        } else {
            res.send(err);
        }
    })
};

module.exports = {
    getAllManager
}
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('The server runs successfully');
});

module.exports = router;
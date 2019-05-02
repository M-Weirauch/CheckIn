const express = require("express");
const router = express.Router();

const userController = require('../controllers/UserController');
const deviceController = require('../controllers/DeviceController');

const userUrl = '/user';
const deviceUrl = '/device';

// GET api listing
router.get('/', (req, res) => {
    res.send('api works');
});

module.exports = router;
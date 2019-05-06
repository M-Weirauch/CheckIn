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

// Save new macs
router.post('/post/devices', (req, res) => {
    deviceController.saveMacs(req, res);
});
// Get macs
router.get('/get/devices', (req, res) => {
    deviceController.getMacs(req, res);
});

module.exports = router;
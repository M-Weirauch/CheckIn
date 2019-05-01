const express = require("express");
const app = express();

const userController = require('../controllers/UserController');

const userUrl = '/user';

// Get User by given userId
app.get(userUrl, userController.getUserById);
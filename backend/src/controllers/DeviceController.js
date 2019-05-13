const express = require('express');
var db = require('../config.js');

// Save the macs
exports.saveMacs = (req, res) => {
    console.log("Gotcha");
};

// Get the macs
exports.getMacs = (req, res) => {
    var sql = "";
    
    res.send("Totally");
};
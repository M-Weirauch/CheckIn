const express = require('express');

// Save the macs
exports.saveMacs = (req, res) => {
    console.log("Gotcha");
};

// Save the macs
exports.getMacs = (req, res) => {
    res.send("Totally")
};
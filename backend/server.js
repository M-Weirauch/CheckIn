const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'authorization,X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Intercepts the OPTIONS method
    if (req.method === 'OPTIONS') {
        res.sendStatus(200)
    }
    else {
        next();
    }
});


/**
 * Require Routes into the Application
 */
const routes = require('./src/routes/api');
app.use('/api', routes);

/**
 * Listen to port
 */
app.listen(port, () => console.log(`API running on localhost:${port}`));
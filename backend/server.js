/**
 * Imports
 */
var port = process.env.PORT || 8080;

var app = express();

var Answer = require('./src/models/AnswerModel');

var bodyParser = require('body-parser');
var path = require('path');

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
var routes = require('./src/routes/Routes');
app.use('/api', routes);

/**
 * Listen to port
 */
app.listen(port, function () {
    console.log('ADP-Backend listening on port 8080!');
});
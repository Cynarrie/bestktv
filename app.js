var port = (process.env.PORT || OPENSHIFT_NODEJS_PORT);
var host = (process.env.IP || OPENSHIFT_NODEJS_IP);

var express = require('express');
var app = express();
app.use(express.static('./views'));






app.listen(port);




var port = (process.env.PORT || process.env.VMC_APP_PORT);
var host = (process.env.IP || process.env.VCAP_APP_HOST);

var express = require('express');
var app = express();
app.use(express.static('./views'));






app.listen(port);




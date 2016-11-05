var express = require('express'),
	app = express(),
	open = require('open'),
	env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
	config = require('./server/config/config')[env];

require('./server/config/express')(app,express,config);
require('./server/config/routes')(app,config);

app.listen(config.port);
console.log('server listening on port '+config.port);
console.log('Opening app on your default browser');
open('http://localhost:'+config.port);
module.exports = function(app,express,config) {
	app.use(express.static(config.rootPath+'/public'));
}
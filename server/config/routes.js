module.exports = function(app,config) {
	app.get('*',function(req,res){
		res.sendFile(config.rootPath+'/public/index.html');
	});
}
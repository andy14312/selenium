module.exports = function(app,config) {
	app.get('/home',function(req,res){
		console.log('logged in');
		res.sendFile(config.rootPath+'/public/home.html');
	});
	app.get('/registration',function(req,res){
		console.log('registration entered');
		res.sendFile(config.rootPath+'/public/registration.html');
	});
	app.get('/loggedOut',function(req,res){
		res.sendFile(config.rootPath+'/public/logout.html');
	});
	app.get('/webtable',function(req,res){
		res.sendFile(config.rootPath+'/public/webtable.html');
	});
	app.get('/',function(req,res){
		console.log('star route');
		res.sendFile(config.rootPath+'/public/index.html');
	});
	
}
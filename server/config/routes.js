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
	app.get('/javascript',function(req,res){
		res.sendFile(config.rootPath+'/public/javascriptCourse.html');
	});
	app.get('/jquery',function(req,res){
		res.sendFile(config.rootPath+'/public/jquerycourse.html');
	});
	app.get('/jquery',function(req,res){
		res.sendFile(config.rootPath+'/public/jquerycourse.html');
	});
	
	app.get('/responsive%20web%20design',function(req,res){
		res.sendFile(config.rootPath+'/public/rwdCourse.html');
	});

	app.get('/selenium',function(req,res){
		res.sendFile(config.rootPath+'/public/seleniumCourse.html');
	});

	app.get('/black%20box%20testing',function(req,res){
		res.sendFile(config.rootPath+'/public/bbtCourse.html');
	});

	app.get('/white%20box%20testing',function(req,res){
		res.sendFile(config.rootPath+'/public/wbtCourse.html');
	});

	app.get('/',function(req,res){
		console.log('star route');
		res.sendFile(config.rootPath+'/public/index.html');
	});
	
}
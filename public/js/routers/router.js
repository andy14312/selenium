(function(selenium,Backbone){
	console.log('here in router');
	selenium.Router = Backbone.Router.extend({
		routes: {
			"/": "index",
			"loggedIn": "loggedIn",
			"home": "home",
			"loggedOut": "loggedOut",
			"registration": "registration"
		},
		initialize: function initialize(options) {
			this.options = options || {};
		},
		index: function index() {
			this.options.loginView = new selenium.LoginView();
			this.options.loginView.render();
		},
		loggedIn: function loggedIn() {
			this.options.navbarView = new selenium.NavbarView();
			this.options.navbarView.render();
			window.location.hash = "home";
		},
		home: function home() {
			
				this.options.homeView = new selenium.HomeView();
				if(this.options.navbarView){
					this.options.navbarView.render();
				} else {
					this.options.navbarView = new selenium.NavbarView();
					this.options.navbarView.render();
				}
				this.options.homeView.render();	
		},
		loggedOut: function loggedOut() {
			if(this.options.navbarView) {
				this.options.navbarView.$el.remove();
			}
			this.options.loggedOutView = new selenium.LoggedOutView();
			this.options.loggedOutView.render();
		},
		registration: function registration() {
			this.options.registrationView = new selenium.RegistrationView();
			this.options.registrationView.render();
		}
	});
})(window.selenium = window.selenium || {},Backbone);
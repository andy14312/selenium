(function(selenium,Backbone){
	console.log('here in router');
	selenium.Router = Backbone.Router.extend({
		routes: {
			"": "index",
			"loggedIn": "loggedIn"
		},
		initialize: function initialize(options) {
			this.options = options || {};
		},
		index: function index() {
			this.options.loginView = new selenium.LoginView();
			this.options.loginView.render();
		},
		loggedIn: function loggedIn() {

		}
	});
})(window.selenium = window.selenium || {},Backbone);
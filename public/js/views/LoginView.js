(function(selenium,Backbone){
	var encrypt = 
	selenium.LoginView = Backbone.View.extend({
		initialize: function initialize() {
			
		},
		render: function render(){
			this.template = $($('#login-template')[0].import).find('.login-view');
			console.log('this.template',this.template);
			$('main').empty().append(this.template);
			this.attachEvents();
			return this;
		},
		attachEvents: function attachEvents() {
			this.$el = $(".login-view");
			console.log("this.$el",this.$el);
			this.$el.find("#loginBtn").on("click",function loginBtnHandler(){
				if(this.$el.find('#username').val()==="admin" && this.$el.find('#password').val()==="admin") {
					window.location.hash = "loggedIn";
				} else {
					this.$el.find('.login-error').text("Username/Password combination incorrect.");
				}
			}.bind(this));
		}
	});
})(window.selenium = window.selenium || {},Backbone);
	
(function(selenium,Backbone){
	var encrypt = 
	selenium.LoginView = Backbone.View.extend({
		initialize: function initialize() {
			
		},
		render: function render(){
			//this.template = $($('#login-template')[0].import).find('.login-view');
			console.log('this.template',this.template);
			//$('main').removeClass('home-main').html(this.template);
			this.attachEvents();
			return this;
		},
		attachEvents: function attachEvents() {
			this.$el = $(".login-view");
			console.log("this.$el",this.$el);
			this.$el.find('.add-user').on('click',function addUserForm(){
				window.location.pathname = "registration";
				
			}.bind(this));
			this.$el.find("#loginBtn").on("click",function loginBtnHandler(){
				if(this.$el.find('#username').val()==="admin" && this.$el.find('#password').val()==="admin") {
					window.location.pathname = "home";
					sessionStorage.setItem('admin','admin');
				} else {
					this.$el.find('.login-error').text("Username/Password combination incorrect.");
				}
			}.bind(this));
			this.$el.find('#resetPasswordForm').on("submit", function passwordResetHandler(e){
				e.preventDefault();
				$('.password-reset-info').empty().text("Reset link sent to mail successfully").removeClass("text-info").addClass('text-success');
			});
		}
	});
	console.log('login view');
	(new selenium.LoginView()).render();
	
})(window.selenium = window.selenium || {},Backbone);
	
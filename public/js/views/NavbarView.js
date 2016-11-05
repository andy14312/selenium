(function(selenium,Backbone){
	selenium.NavbarView = Backbone.View.extend({
		render: function render() {
			//this.template = $($('#navbar-template')[0].import).find('.navbar-view');
			console.log('this.template',this.template);
			//$('.header').after(this.template);
			this.$el = $(".navbar-view");
			this.attachEvents();
		},
		attachEvents: function attachEvents() {
			this.$el.find('.logout').on('click',function logoutHandler(){
				window.location.pathname = "loggedOut";
				window.sessionStorage.removeItem('admin');
			});
			this.$el.find('.nav-home').on('click',function navHomeHandler(){
				window.location.pathname = "home";
			});
			this.$el.find('.web-table').on('click',function webTableHandler(){
				window.location.pathname="webtable";
			});
		}
	});
	(new selenium.NavbarView()).render();
})(window.selenium = window.selenium || {},Backbone);
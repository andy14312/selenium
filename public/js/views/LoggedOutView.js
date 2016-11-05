(function(selenium,Backbone){
	selenium.LoggedOutView = Backbone.View.extend({
		render: function render() {
			// this.template = $($('#logout-template')[0].import).find('.logged-out-view');
			// $('main').removeClass('home-main').html(this.template);
			this.attachEvents();
		},
		attachEvents: function attachEvents() {
			$('.btn-login-again').on('click',function loginAgain(){
				window.location.href = '/';
			});
			$('.btn-close-browser').on('click',function closeBrowser(){
				open(location, '_self').close();
			});
		}
	});
	(new selenium.LoggedOutView()).render();
})(window.selenium = window.selenium || {},Backbone);
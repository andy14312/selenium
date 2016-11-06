(function(selenium,Backbone){
	selenium.RegistrationView = Backbone.View.extend({
		render: function render() {
			//$('main').removeClass('home-main').html($($('#user-detail-template')[0].import).find('.user-detail-form-wrapper'));
			$('#datepicker').datepicker();
			this.$el = $('.user-detail-form');
			this.attachEvents();

		},
		attachEvents: function attachEvents() {
			this.$el.find('.btn-save-profile').on('click',function saveProfileHandler(e){
				//e.preventDefault();
				var fname = this.$el.find('#firstname').val();
				$('.modal-body-profile-saved').html('<p>Hey <em class="text-info">'+fname+'</em>, your profile has been saved successfully!</p>')
			}.bind(this));
			this.$el.on('submit',function(e){
				
				$('.btn-save-profile a').trigger('click');
				e.preventDefault();
			});
			this.$el.find('.btn-cancel-profile-edit').on('click',function cancelProfile(){
				window.location.pathname = "/";
				//location.reload();
			});
		}
	});
	(new selenium.RegistrationView()).render();
})(window.selenium = window.selenium || {},Backbone);
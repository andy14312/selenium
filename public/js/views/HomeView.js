(function(selenium,Backbone){
	selenium.HomeView = Backbone.View.extend({
		render: function render() {
			//this.template = $($('#home-template')[0].import).find('.home-view');
			console.log('this.template',this.template);
			//$('main').addClass('home-main').html(this.template);
			this.$el = $('.home-view');
			this.attachEvents();
		},
		attachEvents: function attachEvents() {
			var file;
			console.log('find element',this.$el.find('.add-user'));
			
			this.$el.find('#profile-pic-browse').on('change',function browsePic(){
				file = this.files[0];
				$('.browsed-file').text(file.name);
				console.log('file ',this.files[0]);
			});
			this.$el.find('.btn-upload').on('click',function uploadPic(){
				var fileUploadMsg = "";
				if(!!file) {
					fileUploadMsg = '<p>File <em clas="text-info">'+file.name+'</em> uploaded successfully</p>'
				} else {
					fileUploadMsg = '<p>No file chosen</p>'
				}
				$('.modal-body-file-upload').html(fileUploadMsg);
			}.bind(this));
			
		},
	});
	(new selenium.HomeView()).render();
})(window.selenium = window.selenium || {},Backbone);
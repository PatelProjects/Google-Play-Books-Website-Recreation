app.views.BookDetail = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.model, "change", this.render);
		console.log("hi");
	},

	render: function(){
		var info = this.model.get("volumeInfo");
		console.log(info);
		var images = info.imageLinks;
		this.$el.html(
			'<header class="book-header l-content l-content-constrained l-row">' +

				'<div class="l-column thumb-image">' +
					'<img src="' + (images.small || images.thumbnail) + '">' +
				'</div>' +

				'<div class="l-column l-pad">' +
					'<div class="title">' + info.title + '</div>' +

					'<div>' +
						'<em>' + info.authors.join(" - ") + '</em>' + info.publishedDate + '<br>' +
						info.publisher + '- Publisher' +
					'</div>' +
				'</div>' +
			'</header>' +

			'<div class="book-content l-content l-content-constrained standout">' +				
				'<h1 class="title">Description</h1>' +
				info.description +
			'</div>'
		);

		return this;
	}
})
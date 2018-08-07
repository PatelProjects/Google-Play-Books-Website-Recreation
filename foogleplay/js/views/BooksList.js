app.views.BooksList = Backbone.View.extend({

	initialize: function(options){
		this.options = options;
		this.listenTo(this.collection, "change reset", this.render);
	},

	render: function(){
		console.log("BookList.render");

		console.log("category = " + this.collection.options.catId);

		this.$el.html('<ul></ul>');
		var $ul = this.$('ul');

		var bookPath = "#category/" + this.collection.options.catId + "/book/";

		this.collection.each(function(model){
			$ul.append(
				'<li class="thumb">' +
					'<a href="'+ bookPath + model.get("id") + '" class="thumb-link">' +
						'<span class="overlay"></span>' +
						'<img src="' + model.get("volumeInfo").imageLinks.thumbnail + '">' +
					'</a>' +
				'</li>'
			);

		});

		
		return this;
	}

});

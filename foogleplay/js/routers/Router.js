app.routers.Router = Backbone.Router.extend({

	routes: {
		'': 'home',
		'category/:id': 'category',
		'category/:id/book/:bookId': 'book',
		'*default': 'unknown'
	},

	home: function(){
		console.log("Home");
	},

	category: function(id){
		console.log("category " + id);

		app.data.books = new app.models.Books(null, {catId: id});
		console.log(app.data.books.url());

		app.data.currentView = new app.views.BooksList({
			collection: app.data.books
		});

		this._activateBooksListPanel();
		$('[data-id=books-list]').empty().append(app.data.currentView.$el);

		app.data.books.fetch({reset:true});
	},

	book: function(id, bookId){
		console.log("book " + bookId + " for category " + id);
		console.log("TP");
		app.data.book = new app.models.Book({id: bookId});

		this._cleanUpCurrentView();

		app.data.currentView = new app.views.BookDetail({
			model: app.data.book
		});

		this._activateBooksDetailPanel();
		$('[data-id=book]').empty().append(app.data.currentView.$el);

		app.data.book.fetch();
	},

	unknown: function(){
		console.log("unknown");
	},


	_activateBooksListPanel: function(){
		$('[data-id=books-wrapper] .is-visible').removeClass('is-visible');
		$('[data-id=books-list]').addClass('is-visible');
	},

	_activateBooksDetailPanel: function(){
		$('[data-id=books-wrapper] .is-visible').removeClass('is-visible');
		$('[data-id=books]').addClass('is-visible');
	},

	_cleanUpCurrentView: function(){
		if(app.data.currentView){
			app.data.currentView.remove();
			app.data.currentView = null;
		}
	}
});
(function() {

angular
.module('shop', ['ui.router'])
.config(appConfig);

appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

	function appConfig($stateProvider, $urlRouterProvider, $locationProvider)
	{

		$urlRouterProvider.otherwise('/404');

		$stateProvider
			.state('home', {
				url: '/',
				views: {
					'content': {
						templateUrl: 'partials/home.html',
					}
				}
			})
			.state('catagoriesPage', {
				url: '/catagories',
				views: {
					'content': {
						templateUrl: 'partials/catagories.html',

					}
				}
			})
			.state('itemsPage', {
				url: '/items',
				views: {
					'content': {
						templateUrl: 'partials/items.html',
					}
				}

			})
			.state('singleItemPage', {
				url: '/:id',
				views: {
					'content': {
						templateUrl: 'partials/singleItem.html',
						controller: 'singleItem',
						controllerAs: 'controller',

					}
				}

			})
			.state('error', {
				url: '/404',
				views: {
					'content': {
						templateUrl: 'partials/404.html',
					}
				}

			})
	}
})();
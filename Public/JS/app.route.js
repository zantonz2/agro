(function(){
	angular.module('route',['ngRoute'])
		.config(function($routeProvider){
			$routeProvider.when('/main',{
				templateUrl:'templates/main.html',
				//controller:'main'
			});
			$routeProvider.when('/price',{
				templateUrl:'templates/price.html',
				controller:'price as price'
			});
			$routeProvider.when('/contact',{
				templateUrl:'templates/contact.html',
			});
			$routeProvider.when('/shipping',{
				templateUrl:'templates/shipping.html',
			});
			$routeProvider.when('/cabinet',{
				templateUrl:'templates/cabinet.html',
			});
			$routeProvider.otherwise({redirectTo:'/main'});
		});
})()
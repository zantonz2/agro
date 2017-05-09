(function(){
	var app=angular.module('app');

	app.directive('modalBasket', function(){
		return {
			restrict:'E',
			templateUrl:'templates/basketModal.html',
			controller:'basketTMP'
		}
	});

	app.directive('headerLink', function(){
		return {
			restrict:'E',
			templateUrl:'templates/headerLink.html',
			//controller:'basketTMP'
		}
	});
})()
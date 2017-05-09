
(function(){
	app=angular.module('controllers',[]);
	
	app.controller('header', function($scope,basket){
		this.path=function(){return location.hash.slice(3);}
		$scope.basket=basket;
		basket.init();

	});

	app.controller('price', function($scope,basket){
		this.productsPrice=[
			{id:0, name:'Картофель сорт Адретта', count:1, price:13},
			{id:1, name:'Помидоры', count:1, price:122},
			{id:2, name:'Огурцы', count:1, price:11},
			{id:3, name:'Огурцы', count:1, price:11},
			{id:4, name:'Огурцы', count:1, price:11}
		];
		
		this.changeCount=function(ev,prod){
			var operand=(ev.target.textContent==='+')?1:-1;
			if (prod.count===1 & operand<1) return;
			prod.count=parseInt(prod.count)+operand;
		};

		this.addProduct=function(ev, prod){
			var obj={};
			Object.assign(obj,prod);
			basket.addProduct(obj);
			prod.count=1;
		};

	});
	
	app.controller('basketTMP', function($scope, basket){

		$scope.basket=basket;
	});


})();
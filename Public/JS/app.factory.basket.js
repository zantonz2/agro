(function(){
	app=angular.module('Basket',[]);
	app.factory('basket', function(){
		function Basket(){
			this.products=(storageRead())?storageRead():[];

			this.addProduct=function(product){
				var label=true;
				for (var i = 0; i < this.products.length; i++) {
					if(this.products[i].id===product.id) {
						this.products[i].count=parseInt(this.products[i].count)+parseInt(product.count);
						label=false;
					}
				}
				if (label) {
					this.products.push(product);
				}
				storageRecord(this.products);
				if (!$('.basket').hasClass('visible')) this.init();
			};

			this.totalPrice=function(){
				var total=0;
				for (var i = 0; i < this.products.length; i++) {
					total+=this.products[i].price*this.products[i].count;
				}
				return total;
			};

			this.deleteProduct=function(index){
				if (index==='all') {
					this.products=[];
				}else{
					this.products.splice(index,1);
				}
				storageRecord(this.products);
				this.destroyIconAndModal();
			}

			this.changeCount=function(ev,prod){
				if (prod.count===1 & ev.target.textContent==='-') {
					return;
				} else if (prod.count<=0) {
					prod.count=1;
				} else {
					prod.count=(ev.target.textContent==='-')?prod.count-1:prod.count+1;
				}
			};

			this.log=function(){
				console.log(this.products);
			};

			this.init=function(){
				if (this.products.length!=0) {
					$('.basket').addClass('visible');
				}
			}
			
			this.destroyIconAndModal=function(){ //Icon
				if (this.products.length===0) {
					$('.basket').removeClass('visible');
					$('.basketModal').hide();
					$('.modal__overlay').hide();
				}
			};

			this.openModal=function(){
				if (this.products!=[]){
					$('.modal__overlay').fadeIn(300,'linear');
					$('.basketModal').fadeIn(600,'linear');

				}
			}

			this.closeModal=function(){
				$('.basketModal').fadeOut(400,'swing');
				$('.modal__overlay').fadeOut(500,'swing');
			}			

			function storageRead() {
				if (localStorage.getItem('__basketProduct')===null) {
					return false
				} else {
					var product=JSON.parse(localStorage.getItem('__basketProduct'));
					return product;
				}
			};

			function storageRecord(product) {
				localStorage.setItem('__basketProduct',JSON.stringify(product));
			};

		}
		return new Basket;
	});
	
})();
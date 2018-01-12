angular.module('appModule')
.component('discountForm', {
	templateUrl : 'app/appModule/form/discountForm.component.html',
	controllerAs : 'vm',
	controller : function(vetService, $filter, $location, $routeParams, $cookies) {
		
		var vm = this;
		vm.showComany = null;
		vm.showAddress = null;
		vm.showLocation = null;
		vm.showDiscount = null;
		vm.showButton = null;
		vm.discounts = [];
		
		// Display Updated List
		var reload = function() {
			vetService.index()
			.then(function(res){
				vm.discounts = res.data;
			})
		}
		
		reload();
		
		
		//on Company form submit - show address form / hide company form
		vm.addCompany = function(company) {
			vm.showCompany = company;
			vm.showAddress = company;
			
		}
		
		//on Address form submit - show Location form / hide Company form
		vm.addAddress = function(address) {
			vm.showAddress = null;
			vm.showLocation = address;
		}
		
		//on Location form submit - show Discount form / hide Location form
		vm.addLocation = function(location) {
			vm.showLocation = null;
			vm.showDiscount = location;
		}
		
		//on Discount form submit - show AddAllButton / hide Discount form
		vm.addDiscount = function(discount) {
			vm.showDiscount = null;
			vm.showButton = discount;
		}
		
		// Create Discount - All forms
		vm.addAllForms = function(discount) {
			var discountCopy = angular.copy(discount);
			
			vetService.createDiscount(discountCopy)
			.then(function(res){
				reload();
//				$location.path('/discounts');
				
			})
		}
		
		
		
		
	}
})
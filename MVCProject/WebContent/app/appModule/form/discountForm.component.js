angular.module('appModule')
.component('discountForm', {
	templateUrl : 'app/appModule/form/discountForm.component.html',
	controllerAs : 'vm',
	controller : function(vetService, $filter, $location, $routeParams, $cookies, $rootScope) {

		var vm = this;
		vm.showCompanySearch = null;
		vm.showCompany = null;
		vm.showAddress = null;
		vm.showLocation = null;
		vm.showDiscount = null;
		vm.showButton = null;
		vm.companyId = null;
		vm.discounts = {};
		vm.companySearchResult = "";
		vm.locationResults = [];
		vm.companyResults = [];
		vm.company = "";
		
		var companyExists = false;
		var locationExists = false;
		

		// Display Updated List
		var reload = function() {
			vetService.index()
			.then(function(res){
				vm.discounts = res.data;
			})
		}

		reload();
		
		//Search for company - 
		vm.searchCompany = function() {
			vetService.searchCompany(vm.company)
				.then(function(response) {
					vm.companyResults = response.data;
					vm.showCompanySearch = response.data;
				})
		}
		
		vm.getLocations = function(company) {
			console.log("inside getLocations");
			console.log(company.id);
			vetService.getLocations(company.id)
				.then(function(response) {
					console.log(response.data);
					vm.locationResults = response.data;
					
				})
			
		}

		//on Company form submit - show address form / hide company form
		vm.addCompany = function(company) {
			vm.showCompany = company;
			vm.showAddress = company;
			vm.discounts.company = company;
			console.log(company);
			console.log(vm.discounts);
//			if company exists, don't add company


		}

		//on Address form submit - show Location form / hide Company form
		vm.addAddress = function(address) {
			vm.showAddress = null;
			vm.showLocation = address;
			vm.discounts.address = address;
			console.log(address);
			console.log(vm.discounts);
//			if address exists, don't add address
		}

		//on Location form submit - show Discount form / hide Location form
		vm.addLocation = function(location) {
			vm.showLocation = null;
			vm.showDiscount = location;
			vm.discounts.location = location;
			console.log(location);
			console.log(vm.discounts);
//			if location exists, don't add location
		}

		//on Discount form submit - show AddAllButton / hide Discount form
		vm.addDiscount = function(discount) {
			vm.showDiscount = null;
			vm.showButton = discount;
			vm.discounts.discount = discount;
			console.log(discount);
			console.log(vm.discounts);
		}

		// Create Discount - All forms
		vm.addAllForms = function() {
			if (companyExists) {
				if (locationExists) {
					vetService.createDiscount(vm.discounts.discount, vm.discounts.company.id).then(function() {
						//do something
					});
				}
				else {
					vetService.createAddress(vm.discounts.address).then(function(response) {
						vetService.createLocation(vm.discounts.location, vm.discounts.company.id, response.data.id).then(function(response) {
							vetService.createDiscount(vm.discounts.discount, vm.discounts.company.id).then(function(response) {
								//do something with new discount at new company
								vm.showButton = null;
								reload();
							})
						})
					})
				}
			}
			else {
				vetService.createCompany(vm.discounts.company).then(function(response) {
					vm.companyId = response.data.id;
					vetService.createAddress(vm.discounts.address).then(function(response) {
						vetService.createLocation(vm.discounts.location, vm.companyId, response.data.id).then(function(response) {
							vetService.createDiscount(vm.discounts.discount, vm.companyId).then(function(response) {
								//do something with new discount at new company
								vm.showButton = null;
								reload();
							})
						})
					})
				})
			}
		}//end of addAllForms method
		

	}
})

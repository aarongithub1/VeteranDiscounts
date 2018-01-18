angular.module('appModule').component('navbar', {
	templateUrl : 'app/appModule/navbar/navbar.component.html',
	controllerAs : 'vm',
	controller : function(vetService, authService, $rootScope, $location, $filter,$scope) {
		var vm = this;
		vm.distances = ['3', '5', '10', '15', '20', '25', '50']
		vm.searchTerm = "";
		vm.selected = null;
		vm.typeArr = [];
		vm.results = [];
		vm.typeId = null;
		vm.distance = vm.distances[0];
		console.log(vm.typeId);

		vm.myPage = function(){

			$location.path('/mypage');
		}

		vm.loadTypes = function(){
			vetService.allTypes().then(function(res){
				vm.typeArr = res.data;
			});
		}

		vm.loadTypes();

		vm.checkLogin = function() {
			//console.log(authService.getToken().id);
			if(authService.getToken().id) {
				return true;
			}
			return false;
		}

		vm.typeFilter = function(){
			vm.results = $filter('typeFilter')(vm.results,vm.typeId);

		}

		vm.search = function() {
			vetService.search(vm.searchTerm).then(function(response) {
				$location.url('/');
				setTimeout(function(){
					vm.results = response.data;
					vm.typeFilter();
					vm.broadcast();
				}, 500)
			});
		}


		vm.broadcast = function(){
			console.log('broadcasting search');
			$rootScope.$broadcast('search-event',{
				searchResults : vm.results,
				origin : vm.origin,
				distance : vm.distance
			})
		}

		vm.createDiscount = function() {
			$location.path('/company/discount')
		}

		$scope.$on('origin', function(e, args) {
			vm.origin = args.origin;
			vm.search();
		})
	}
});

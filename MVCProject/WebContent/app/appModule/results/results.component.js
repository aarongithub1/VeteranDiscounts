angular.module('appModule').component('results', {
	templateUrl : 'app/appModule/results/results.component.html',
	controllerAs : 'vm',
	controller : function(vetService,$scope,$rootScope,$filter) {
		var vm = this;
		//companies = [];
		vm.results = [];
		vm.active = null;
		vm.distance = null;
		vm.typeId = null;
		vm.origin = {};
		reload();



		function reload(){
		vetService.index().then(function(res){
			vm.results = res.data;
			console.log(vm.results);
			vm.makeActive(vm.results[0]);
		  }).catch(function(error){
			  console.log(error);
		  });
		}

		vm.makeActive = function(result){
			vm.active = result;
			$rootScope.$broadcast('activeSelection', vm.active);
		}

		$scope.$on('search-event', function(e,args){
			vm.results = args.searchResults;
			if(vm.results.length === 0){
			} else {
				vm.makeActive(vm.results[0]);
			}

			vm.distance = args.distance;
			vm.typeId = args.type;
		})

		// $scope.on('origin', function(e, args) {
		// 	vm.origin = args.origin;
		// })

		vm.getDistances = function() {
			vm.results.forEach(function(item) {
				vetService.distance(vm.origin.lat + '+' + vm.origin.lng, item.address.lat + '+' + item.address.longitude).then(function(response){
					item.distance = response.data.rows[0].elements[0].distance.text;
				})
			})
		}

	}
});

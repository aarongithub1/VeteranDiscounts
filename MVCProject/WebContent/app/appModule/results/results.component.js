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



		function reload(){
		vetService.index().then(function(res){
			vm.results = res.data;
			vm.getDistances();
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
			vm.origin = args.origin;
			if(vm.results.length === 0){
			} else {
				vm.makeActive(vm.results[0]);
			}
			vm.getDistances();
			vm.distance = args.distance;
			vm.typeId = args.type;
		})



		vm.getDistances = function() {
			var toRadians = function(num) {
				return num * (Math.PI / 180);
			}
			vm.results.forEach(function(item){
				if (item.distance === undefined) {
					var lat1 = item.address.lat;
					var lat2 = vm.origin.lat;
					var lon1 = item.address.longitude;
					var lon2 = vm.origin.lng;
					var φ1 = toRadians(lat1), φ2 = toRadians(lat2), Δλ = toRadians(lon2-lon1), R = 6371e3; // gives d in metres
					var d = Math.acos( Math.sin(φ1)*Math.sin(φ2) + Math.cos(φ1)*Math.cos(φ2) * Math.cos(Δλ) ) * R;
					var miles = d/1609.344;
					item.distance = miles;
				}
			})
		}

		// $scope.$on('origin', function(e, args) {
		// 	vm.origin = args.origin;
		// 	// reload();
		// })
	}
});

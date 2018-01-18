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
			vm.getDistances();
			vm.distance = args.distance;
			vm.typeId = args.type;
		})

		$scope.$on('origin', function(e, args) {
			vm.origin = args.origin;
		})

		vm.getDistances = function() {
			console.log('in getDistances');
			console.log(vm.origin.lat + '+' + vm.origin.lng);
			var origin = vm.origin.lat + '+' + vm.origin.lng;
			var destination = vm.results[0].address.lat + '+' + vm.results[0].address.longitude;
			vetService.distance(origin, destination).error(function(error, status) {
				console.log('error');
				console.log(error);
				console.log(status);
			});
			// vm.results.forEach(function(item) {
			// 	console.log('in foreach');
			// 	console.log(item.address.lat + '+' + item.address.longitude);
			// 	var destination = item.address.lat + '+' + item.address.longitude
			// 	vetService.distance(origin, destination).then(function(response){
			// 		console.log('in promise');
			// 		item.distance = response.data.rows[0].elements[0].distance.text;
			// 		console.log(response.data);
			// 	})
			// })
		}

	}
});

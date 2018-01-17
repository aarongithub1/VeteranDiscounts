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
		reload();
		
		
		
		function reload(){
		vetService.index().then(function(res){
			vm.results = res.data;
//			companies.forEach(function(element){
//				element.locations.forEach(function (element){
//					vm.results.push(element);
//				})
//			})
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
			//console.log('scope hit in results');
			//console.log(args.searchResults);
			vm.results = args.searchResults;
			if(vm.results.length === 0){
			} else {
				vm.makeActive(vm.results[0]);
			}
			
			vm.distance = args.distance;
			vm.typeId = args.type;
		})
		
	}
});

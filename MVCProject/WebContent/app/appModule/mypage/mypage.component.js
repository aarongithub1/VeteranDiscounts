angular.module('appModule').component('mypage', {
	templateUrl : 'app/appModule/mypage/mypage.component.html',
	controllerAs : 'vm',
	controller : function(vetService,authService, $location) {
		var vm = this;
		
var vm = this;
		
		vm.editUser = null;
		
		var checkLogin = function() {
			var user = authService.getToken();
			if(!user.id) {
				$location.path('/login')
				return;
			}
			console.log(user);
			return user;
		}		
		vm.user = checkLogin();
		
		vm.setEditUser = function(){
	  		let copy = angular.copy(vm.user);
	  		
	  		vm.editUser = copy;	
  };
		
		vm.doEditUser = function (user) {
			
			vetService.updateUser(user).then
			(checkLogin);
		
		}

	}
});
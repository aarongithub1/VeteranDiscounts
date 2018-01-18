angular.module('authModule').component('mypage', {
	templateUrl : 'app/authModule/mypage/mypage.component.html',
	controllerAs : 'vm',

	controller : function(authService,vetService,$location) {
		

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
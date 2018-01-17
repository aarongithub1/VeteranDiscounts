angular.module('appModule').filter('typeFilter',function(){
	return function(resultsList,typeId){
		var results = [];
		//console.log(resultsList);
		resultsList.forEach(function(item){
			//console.log(typeId);
			if(parseInt(item.company.type.id) === parseInt(typeId)){
				//console.log('item found');
				results.push(item);
			}
		});
		return results;
	}
})
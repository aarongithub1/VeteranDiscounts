angular.module('appModule').filter('typeFilter',function(){
	return function(resultsList,typeId){
		var results = [];
		
		//if zero do not filter
		if(isNaN(parseInt(typeId))){
			return resultsList;
		}
		
		resultsList.forEach(function(item){
			if(parseInt(item.company.type.id) === parseInt(typeId)){
				//console.log('item found');
				results.push(item);
			}
		});
		return results;
	}
})
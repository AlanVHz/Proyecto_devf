(function(){
	'use strict'

	angular
		.module('injob')
		.config(rutasconfig)

		function rutasconfig($routeProvider){
			$routeProvider
			.when('/',{
					template:'<menuprincipal></menuprincipal>'
				})

			.when('/empresa',{
					template:'<empresa></empresa>'
				})
			.when('/desarrollador',{
					template:'<developer></developer>'
				})

			.otherwise({
					redirectTo:'/'
				});
		}


})();
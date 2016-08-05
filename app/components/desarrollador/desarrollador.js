(function(){
	'use strict'

	var developer = {
		controller: developerCtrl,
		templateUrl: 'app/components/desarrollador/desarrollador.html'
	}

	function developerCtrl(){
		var model = this;
	}

	angular
		.module('injob')
		.component('developer', developer)

})();
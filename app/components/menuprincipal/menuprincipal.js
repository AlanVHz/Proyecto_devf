(function(){
	'use strict'

	var menuprincipal={
		controller: menuprincipalCtrl,
		templateUrl:'app/components/menuprincipal/menuprincipal.html'
	}

	function menuprincipalCtrl(){
		var model = this;

	}

	angular
	.module('injob')
	.component('menuprincipal', menuprincipal)

})();
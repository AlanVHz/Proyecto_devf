(function(){
	'use strict'

	var empresa ={
		controller: empresaCtrl,
		templateUrl:'app/components/empresa/empresa.html'
	}

	function empresaCtrl(){
		var model = this;
	}



	angular
		.module('injob')
		.component('empresa', empresa)

})();
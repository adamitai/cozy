
// Filename: app.js
//
// Define the 'app' module.
//
angular.module('app', ['ui.bootstrap'])
//
// Application controller.
//
.controller('AppCtrl', function AppCtrl ($scope) {

	//
	// Setup the application data-model.
	//
	$scope.dataBindingTest = "Hello computer!";

});
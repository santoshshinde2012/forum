// create the controller and inject Angular's $scope
angular.module('santoshApp.homecontrollers', [])
.controller('AppController', function($scope, $http) {

})
.controller('HomeController', function($scope, $http) {
    $http.get('lib/data/social.json').success(function(data) {
    	$scope.links = data.socialLinks;
    })
    $scope.profileimg = "images/profile.jpg";
  	$scope.projectcount = 20;
  	$scope.msgcount = 15;
  	$scope.followerscount = 200;
});

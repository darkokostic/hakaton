angular.module('starter.controllers', [])

.controller("SideBarController", function ($scope, $ionicSideMenuDelegate) {

  $scope.toggleLeft = function () {
      $ionicSideMenuDelegate.toggleLeft();
  }
})

.controller('PocetnaCtrl', function($scope) {

})

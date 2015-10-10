angular.module('starter.controllers', [])

.controller("SideBarController", function ($scope, $ionicPlatform, $ionicSideMenuDelegate, $location) {

    $scope.toggleLeft = function () {

        $ionicSideMenuDelegate.toggleLeft();
    }

    $scope.toggleRight = function() {
      $ionicSideMenuDelegate.toggleRight();
    }
})

.controller('PocetnaCtrl', function($scope) {
  //Pocetna controller
})

.controller('OSkoliCtrl', function($scope, $stateParams, $ionicSideMenuDelegate) {
  $ionicSideMenuDelegate.toggleLeft();
  //O skoli controller
})

.controller('UpisCtrl', function($scope, $ionicSideMenuDelegate) {
  $ionicSideMenuDelegate.toggleLeft();
  //Upis controller
})

.controller('RasporedNastaveCtrl', function($scope, $ionicSideMenuDelegate) {
  $ionicSideMenuDelegate.toggleLeft();
  //Raspored Nastave controller
})

.controller('KalendarRadaCtrl', function($scope, $ionicSideMenuDelegate) {
  $ionicSideMenuDelegate.toggleLeft();
  //Kalendar Rada controller
})

.controller('KontaktCtrl', function($scope, $ionicSideMenuDelegate) {
  $ionicSideMenuDelegate.toggleLeft();
  //Kontakt controller
})

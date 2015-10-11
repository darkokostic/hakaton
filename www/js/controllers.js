angular.module('starter.controllers', [])

.controller("SideBarController", function ($scope, $ionicPlatform, $ionicSideMenuDelegate, $location, $ionicHistory) {

  $scope.toggleLeft = function () {

      $ionicSideMenuDelegate.toggleLeft();
  }

  $scope.toggleRight = function() {
    $ionicSideMenuDelegate.toggleRight();
  }
})

.controller('PocetnaCtrl', function($scope, $ionicLoading, $http) {
  $scope.show = function() {
    $ionicLoading.show({
      template: 'Учитавање обавештења...',
      duration: 1000
    });
  };
  $scope.hide = function(){
    $ionicLoading.hide();
  };
  //Pocetna controller
  $http.get('http://www.vtsnis.edu.rs/').success(function (data) {
    //Extract text using jquery
    $(function(){
      var $str = $(data);
      var htmlData = $str.find("td[colspan$='3']").text();
      var obavestenja = htmlData.replace(/\s\s\s+/g, ' ');
      console.log(obavestenja);
      $scope.sajt = obavestenja.replace(/О Б А В Е Ш Т Е Њ Е/g , '\n\nО Б А В Е Ш Т Е Њ Е\n\n').replace(/УПОЗОРЕЊЕ/g , '\n\nУПОЗОРЕЊЕ\n\n').replace(/КОНКУРС/g , '\n\nКОНКУРС\n\n');
    })
    //END OF Extract

  });
})

.controller('OSkoliCtrl', function($scope, $stateParams, $ionicSideMenuDelegate) {
  angular.element(document.querySelector('#smeroviBtn')).addClass('hideButton');
  $ionicSideMenuDelegate.toggleLeft();
  //O skoli controller
})

.controller('UpisCtrl', function($scope, $ionicSideMenuDelegate) {
  angular.element(document.querySelector('#smeroviBtn')).addClass('hideButton');
  $ionicSideMenuDelegate.toggleLeft();
  //Upis controller
})

.controller('RasporedNastaveCtrl', function($scope, $ionicSideMenuDelegate) {
  angular.element(document.querySelector('#smeroviBtn')).addClass('hideButton');
  $ionicSideMenuDelegate.toggleLeft();
  //Raspored Nastave controller
})

.controller('KalendarRadaCtrl', function($scope, $ionicSideMenuDelegate) {
  angular.element(document.querySelector('#smeroviBtn')).addClass('hideButton');
  $ionicSideMenuDelegate.toggleLeft();
  //Kalendar Rada controller
})

.controller('KontaktCtrl', function($scope, $ionicSideMenuDelegate) {
  angular.element(document.querySelector('#smeroviBtn')).addClass('hideButton');
  $ionicSideMenuDelegate.toggleLeft();
  //Kontakt controller
})
.controller('OsnovneCtrl', function($scope, $ionicSideMenuDelegate) {
  angular.element(document.querySelector('#smeroviBtn')).addClass('hideButton');
  $ionicSideMenuDelegate.toggleRight();
  //Osnovne studije controller
})
.controller('SpecijalistickeCtrl', function($scope, $ionicSideMenuDelegate) {
  angular.element(document.querySelector('#smeroviBtn')).addClass('hideButton');
  $ionicSideMenuDelegate.toggleRight();
  //Strukovne studije controller
})

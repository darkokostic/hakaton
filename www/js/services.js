angular.module('starter')

.factory('VTSNisFactory', function($http) {
    //SETTINGS
    var url = 'http://www.vtsnis.edu.rs/';
    var VtsFactory = {};

    VtsFactory.getObavestenja = function() {
      return $http.get(url).success(function (data) {
      })
    };
    //returning function
    return VtsFactory;
})

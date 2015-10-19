angular.module('starter')

.factory('VTSNisFactory', function($http) {
    //SETTINGS
    var url = 'http://www.vtsnis.edu.rs/';
    var src = 'js/data.json';
    var VtsFactory = {};

    VtsFactory.getObject = function() {
        return $http.get(src, {
           headers: {}
           })
        .then(function(response) {
            return response.data;
        });
    };

    VtsFactory.getObavestenja = function() {
      return $http.get(url).success(function (data) {
      })
    };

    //returning function
    return VtsFactory;
})

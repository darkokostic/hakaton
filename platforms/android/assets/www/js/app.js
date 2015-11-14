angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.backButton.text('');
  $ionicConfigProvider.backButton.previousTitleText(false);

  $stateProvider
  .state('pocetna', {
    url: '/pocetna',
    templateUrl: 'templates/pocetna.html',
    controller: 'PocetnaCtrl'
  })

  .state('raspored-single', {
    url: '/raspored-single/:idSmer',
    templateUrl: 'templates/raspored-single.html',
    controller: 'RasporedSingleCtrl'
  })

  .state('upis', {
    url: '/upis',
    templateUrl: 'templates/upis.html',
    controller: 'UpisCtrl'
  })

  .state('raspored-nastave', {
    url: '/raspored-nastave',
    templateUrl: 'templates/raspored-nastave.html',
    controller: 'RasporedNastaveCtrl'
  })

  .state('kalendar-rada', {
    url: '/kalendar-rada',
    templateUrl: 'templates/kalendar-rada.html',
    controller: 'KalendarRadaCtrl'

  })

  .state('kontakt', {
    url: '/kontakt',
    templateUrl: 'templates/kontakt.html',
    controller: 'KontaktCtrl'
  })

  .state('osnovne', {
    url: '/osnovne',
    templateUrl: 'templates/osnovne.html',
    controller: 'OsnovneCtrl'
  })

  .state('specijalisticke', {
    url: '/specijalisticke',
    templateUrl: 'templates/specijalisticke.html',
    controller: 'SpecijalistickeCtrl'
  })

  .state('studije-single', {
    url: '/studije-single/:smerID',
    templateUrl: 'templates/studije-single.html',
    controller: 'StudijeSingleCtrl'
  })

  .state('specijalisticke-single', {
    url: '/specijalisticke-single/:smerID',
    templateUrl: 'templates/specijalisticke-single.html',
    controller: 'SpecijalistickeSingleCtrl'
  })

  .state('o-skoli', {
    url: '/o-skoli',
    templateUrl: 'templates/o-skoli.html',
    controller: 'OSkoliCtrl'
  });

  $urlRouterProvider.otherwise('/pocetna');
});

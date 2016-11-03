angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('joke', {
      url: '/',
      template: '<img src="http://www.thepixiebob.com/s/cc_images/cache_6472012.jpg?t=1386655118" alt="" ng-click="getJoke()"/> <br/> {{joke}}'
    })
    .state('kittenz', {
      url: '/kittenz',
      templateUrl: './kittenz.html'
    })


});

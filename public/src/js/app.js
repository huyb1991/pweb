(function() {
  'use strict';
  angular
    .module('app', [
      'ngRoute',
      'ngAnimate',
      'personalControllers'
    ])
    .config(['$routeProvider', '$locationProvider', appConfig]);

  function appConfig($routeProvider,$locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'profile.html',
      controller: 'ProfileCtrl'
    })
    .when('/projects', {
      templateUrl: 'projects.html',
      controller: 'ProjectsCtrl'
    })
    .when('/books', {
      templateUrl: 'books.html',
      controller: 'BooksCtrl'
    })
    .when('/bookmarks', {
      templateUrl: 'bookmarks.html',
      controller: 'BookMarksCtrl'
    })
    .otherwise({
      redirectTo:'/'
    });
    $locationProvider.html5Mode(true);
  }
})();
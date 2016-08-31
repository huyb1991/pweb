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
      templateUrl: 'src/template/profile.tpl.html',
      controller: 'ProfileCtrl'
    })
    .when('/projects', {
      templateUrl: 'src/template/projects.tpl.html',
      controller: 'ProjectsCtrl'
    })
    .when('/books', {
      templateUrl: 'src/template/books.tpl.html',
      controller: 'BooksCtrl'
    })
    .when('/bookmarks', {
      templateUrl: 'src/template/bookmarks.tpl.html',
      controller: 'BookMarksCtrl'
    })
    .otherwise({
      redirectTo:'/'
    });
    $locationProvider.html5Mode(true);
  }
})();
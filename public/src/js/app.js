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
      controller: 'ProfileCtrl',
      controllerAs: 'profileVm'
    })
    .when('/projects', {
      templateUrl: 'src/template/projects.tpl.html',
      controller: 'ProjectsCtrl',
      controllerAs: 'projectVm'
    })
    .when('/books', {
      templateUrl: 'src/template/books.tpl.html',
      controller: 'BooksCtrl',
      controllerAs: 'bookVm'
    })
    .when('/bookmarks', {
      templateUrl: 'src/template/bookmarks.tpl.html',
      controller: 'BookMarksCtrl',
      controllerAs: 'bookMarkVm'
    })
    .otherwise({
      redirectTo:'/'
    });
    $locationProvider.html5Mode(true);
  }
})();
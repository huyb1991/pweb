var personalApp=angular.module('personalApp',['ngRoute','ngAnimate','personalControllers']);personalApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){$routeProvider.when('/',{templateUrl:'profile.html',controller:'ProfileCtrl'}).when('/projects',{templateUrl:'projects.html',controller:'ProjectsCtrl'}).when('/books',{templateUrl:'books.html',controller:'BooksCtrl'}).when('/bookmarks',{templateUrl:'bookmarks.html',controller:'BookMarksCtrl'}).otherwise({redirectTo:'/'});$locationProvider.html5Mode(true);}]);
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','UA-70848122-2','auto');ga('send','pageview');;
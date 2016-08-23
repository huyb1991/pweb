(function() {
  'use strict';
  angular.module('personalControllers', [])
  .controller('ProfileCtrl', ['$scope', '$http', ProfileCtrl])
  .controller('ProjectsCtrl', ['$scope', '$http', ProjectsCtrl])
  .controller('BooksCtrl', ['$scope', '$http', BooksCtrl])
  .controller('BookMarksCtrl', ['$scope', '$http', BookMarksCtrl])
  .controller('NavCtrl', ['$scope', '$location', NavCtrl]);

  function ProfileCtrl($scope, $http) {
    $http.get('service/profile.json').then(function(response) {
      var object = response.data;
      $scope.desc = object.desc;
      $scope.avatar = object.avatar;
    });
    $http.get('service/social.json').then(function(response) {
      $scope.socials = response.data;
    });
  }

  function ProjectsCtrl($scope, $http) {
    $http.get('service/project.json').then(function(response) {
      $scope.projects = response.data;
    });
  }

  function BooksCtrl($scope, $http) {
    $http.get('service/book.json').then(function(response) {
      $scope.books = response.data;
    });
  }

  function BookMarksCtrl($scope, $http) {
    $http.get('service/bookmark.json').then(function(response) {
      $scope.bookmarks = response.data;
    });
  }

  function NavCtrl($scope, $location) {
    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
  }
})();
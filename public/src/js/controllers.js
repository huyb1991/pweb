(function() {
  'use strict';
  angular.module('personalControllers', [])
  .controller('ProfileCtrl', ['$scope', '$http', ProfileCtrl])
  .controller('ProjectsCtrl', ['$scope', '$http', ProjectsCtrl])
  .controller('BooksCtrl', ['$scope', '$http', BooksCtrl])
  .controller('BookMarksCtrl', ['$scope', '$http', BookMarksCtrl])
  .controller('NavCtrl', ['$scope', '$location', NavCtrl]);

  function ProfileCtrl($scope, $http) {
    var vm = this;

    $http.get('service/profile.json').then(function(response) {
      var object = response.data;
      vm.desc = object.desc;
      vm.avatar = object.avatar;
    });
    $http.get('service/social.json').then(function(response) {
      vm.socials = response.data;
    });
  }

  function ProjectsCtrl($scope, $http) {
    var vm = this;

    $http.get('service/project.json').then(function(response) {
      vm.projects = response.data;
    });
  }

  function BooksCtrl($scope, $http) {
    var vm = this;

    $http.get('service/book.json').then(function(response) {
      vm.books = response.data;
    });
  }

  function BookMarksCtrl($scope, $http) {
    var vm = this;

    $http.get('service/bookmark.json').then(function(response) {
      vm.bookmarks = response.data;
    });
  }

  function NavCtrl($scope, $location) {
    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
  }
})();
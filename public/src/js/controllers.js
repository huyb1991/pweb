var personalControllers = angular.module('personalControllers', []);
personalControllers.controller('ProfileCtrl', ['$scope', '$http', ProfileCtrl]);
personalControllers.controller('ProjectsCtrl', ['$scope', '$http', ProjectsCtrl]);
personalControllers.controller('BooksCtrl', ['$scope', '$http', BooksCtrl]);
personalControllers.controller('BookMarksCtrl', ['$scope', '$http', BookMarksCtrl]);
personalControllers.controller('NavCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
}]);

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
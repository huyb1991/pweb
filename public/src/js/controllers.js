var personalControllers = angular.module('personalControllers', []);
personalControllers.controller('ProfileCtrl', ['$scope', '$http', ProfileCtrl]);
personalControllers.controller('ProjectsCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('service/project.json').then(function(response) {
        $scope.projects = response.data;
    });
}]);
personalControllers.controller('BooksCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('service/book.json').then(function(response) {
        $scope.books = response.data;
    });
}]);
personalControllers.controller('BookMarksCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('service/bookmark.json').then(function(response) {
        $scope.bookmarks = response.data;
    });
}]);
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
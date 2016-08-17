var personalControllers = angular.module('personalControllers', []);
personalControllers.controller('ProfileCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('service/profile.json').then(function(response) {
        var object = response.data;
        $scope.desc = object.desc;
        $scope.avatar = object.avatar;
    });
    $http.get('service/social.json').then(function(response) {
        $scope.socials = response.data;
    });
}]);
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

/*personalControllers.controller('ProfileCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('https://api.parse.com/1/classes/Profile', {
        headers: {
            'X-Parse-Application-Id': 'nUb4Im8Xvh9WJoJ7udFvdQ6qeg2g7DYYhR9mr6Ec',
            'X-Parse-REST-API-Key': 'Vrcub7y0TKoA5aYW8i2tG1mogN8Rq4WyxpxBxv63'
        }
    }).then(function(response) {
        var object = response.data.results[0];
        $scope.desc = object.desc;
        $scope.avatar = object.avatar;
    });
}]);*/
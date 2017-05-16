var app = angular.module('ViewApp', []);

app.controller('viewCtrl', function($scope, $http, $window) {
    $scope.sortColumn = "title";
    $scope.viewMovie = function(genre) { 
    var base = 'https://api.themoviedb.org/3';
    var parameter = genre;
    var service = '/genre/';
    var service2 = '/movies';
    var apiKey = '00085328b00931273b77f8fbb997b5d3';
	  var optional = '&language=en-US&include_adult=false&sort_by=created_at.asc';
    var url = base + service + parameter + service2 + '?api_key=' + apiKey + optional; 
    $scope.result = 'requesting...';

    $http.get(url).then(function(data, status) { 
      $scope.results = data; 
    },function(data, status) {
      $scope.results = data;
    });
  };
    $scope.redirect = function() {
         $window.location.href="/addMovieList.html"
	};
});
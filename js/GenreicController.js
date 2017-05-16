var app = angular.module('plunker', []);

app.controller('MyCtrl', function($scope, $http, $window) {
    var base = 'https://api.themoviedb.org/3';
    var service = '/genre/movie/list';
    var apiKey = '00085328b00931273b77f8fbb997b5d3';
	var optional = '&language=en-US';
    var callback = 'JSON_CALLBACK'; // provided by angular.js
    var url = base + service + '?api_key=' + apiKey + optional; //+ '&callback=' + callback;

    $scope.result = 'requesting...';

    $http.get(url).then(function(data, status) { 
      $scope.results = data; 
    },function(data, status) {
      $scope.results = data;
    });
    $scope.redirect = function() {
         $window.location.href="/addMovieList.html"
	};
   $scope.redirectView = function() {
         $window.location.href="/list.html"
	};
    $scope.redirectBack = function() {
         $window.location.href="/addMovie.html"
	};
});
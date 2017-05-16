angular.module('movieApp.controllers', []).controller('MovieListController', function($scope, $state, popupService, $window, Movie){
	$scope.sortColumn = "title";
	$scope.movies = Movie.query();
    $scope.redirect = function() {
     $window.location.href="/movie-search.html";
                    };
	$scope.deleteMovie = function(movie){
		if (popupService.showPopup('Really delete this?')){
			movie.$delete(function(){
				$window.location.href= "/partials/movie-delete.html";
			});
		}
	};
	 $scope.redirectBack = function() {
     $window.location.href="addMovie.html";
                    };
}).controller('MovieViewController', function($scope, $stateParams, Movie){
	$scope.movie = Movie.get({id: $stateParams.id});

}).controller('MovieCreateController', function($scope, $state, $stateParams, Movie){
	$scope.movie = new Movie();

	$scope.addMovie = function(){
		$scope.movie.$save(function(){
			$state.go('movies');
		});
	};
}).controller('MovieEditController', function($scope, $state, $stateParams, Movie){
	$scope.updateMovie = function(){
		$scope.movie.$update(function(){
			$state.go('movies');
		});
	};
	$scope.loadMovie = function(){
		$scope.movie = Movie.get({id: $stateParams.id});
	};

	$scope.loadMovie();
});


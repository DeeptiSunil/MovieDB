//https://api.themoviedb.org/3/genre/{genre_id}/movies?api_key=<<api_key>>&language=en-US&include_adult=false&sort_by=created_at.asc

angular.module('movieApp.services', []).factory('MovieServiceGenre', function($resource){
	return $resource('https://api.themoviedb.org/3/genre/{genre_id}/movies?api_key="00085328b00931273b77f8fbb997b5d3"&language=en-US&include_adult=false&sort_by=created_at.asc', {genre_id: '@_id'}, {
		get : {
			method: 'GET'
		}
	});
}).factory('MovieSerachID',function($resource) {
  return $resource('https://api.themoviedb.org/3/genre/movie/list?api_key="00085328b00931273b77f8fbb997b5d3"&language=en-US', {
   get : {
       method: 'GET'
   }
  })
});
githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users';
  var access_token = '&access_token=20155503128148af66d7d1a8ac3fda1f2595a26c';
  return {
    search: function(searchTerm) {
      return $http.get(queryUrl + '?q=' + searchTerm + access_token)
    }
  };
}]);
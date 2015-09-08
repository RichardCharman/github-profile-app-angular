githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users?access_token=20155503128148af66d7d1a8ac3fda1f2595a26c';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          q: searchTerm
        }
      });
    }
  };
}]);
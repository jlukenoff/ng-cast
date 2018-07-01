angular.module('video-player')
  .service('youTube', ['$http', function($http) {
    //return youtube helper function(search)
    //that makes an ajax call to youtube
    // and returns data
        
    return function(query, cb) {
      //use $http to make ajax call
      $http({
        url: 'https://www.googleapis.com/youtube/v3/search',
        method: 'GET',
        params: {
          maxResults: '7',
          part: 'snippet',
          q: query,
          type: 'video',
          key: YOUTUBE_API_KEY,
          videoEmbeddable: true
        }
      }).then(function(results) {
        cb(results.data.items);
      }).catch(angular.noop);
      //then update vidList and video with new data
    };
  }]);

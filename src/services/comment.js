angular.module('video-player')
  .service('commentLoader', ['$http', function($http) {
    return function(room) {
      $http({
        url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages?order=-createdAt',
        method: 'GET',
        headers: {
          'X-Parse-Application-Id': 'FILL_IN_KEY_HERE',
          'X-Parse-REST-API-Key': 'FILL_IN_KEY_HERE'
        }
      }).then(function(resp) {
        console.log(_.uniq(resp.data.results.map(message => message.roomname)));
      }).catch(angular.noop);
    };
  }]);
  
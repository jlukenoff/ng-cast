angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<'
    },
    controller: function() {
      console.log('vidList', this.videos);
    },
    templateUrl: 'src/templates/videoList.html'
  });

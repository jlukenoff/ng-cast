angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      index: '<',
      click: '<'
    },
    controller: function() {
    },
    templateUrl: 'src/templates/videoListEntry.html' 
  });


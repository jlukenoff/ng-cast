angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      index: '<',
      click: '<'
    },
    controller: function() {
      console.log(this);
    },
    templateUrl: 'src/templates/videoListEntry.html' 
  });


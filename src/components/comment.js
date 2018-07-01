angular.module('video-player')
  .component('comment', {
    bindings: {
      click: '<'
    },
    templateUrl: 'src/templates/comment.html'
  });
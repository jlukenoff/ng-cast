angular.module('video-player')
  .component('comments', {
    controller: ['commentLoader', function(commentService) {
      this.getComments = () => {
        commentService();
      };
    }],
    templateUrl: 'src/templates/comments.html'
  });
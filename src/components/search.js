angular.module('video-player')

  .component('search', {
    controller: function() {
      this.input = '';
    },
    bindings: {
      click: '<'
    },
    templateUrl: 'src/templates/search.html' 
  });

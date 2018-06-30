angular.module('video-player')

  .component('search', {
    controller: function() {
      this.input = '';
      this.handleClick = (input) => {
        this.click(input);
        this.input = '';
      };
    },
    bindings: {
      click: '<'
    },
    templateUrl: 'src/templates/search.html' 
  });

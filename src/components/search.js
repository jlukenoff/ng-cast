angular.module('video-player')

  .component('search', {
    controller: function() {
      this.input = '';
      this.handleClick = (input) => {
        this.click(input);
        this.input = '';
      };
      this.handleKeyPress = (event) => {
        if (event.keyCode === 13) {
          this.handleClick(this.input);
        }
      };
    },
    bindings: {
      click: '<'
    },
    templateUrl: 'src/templates/search.html' 
  });

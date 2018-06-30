angular.module('video-player')
  .component('app', {
    controller: function() {
      this.videos = window.exampleVideoData;
      this.video = window.exampleVideoData[0];
      this.handleVidChange = (index) => {
        console.log(this);
        let currentVidList = this.videos;
        this.video = currentVidList[index];
      };
    },
    templateUrl: 'src/templates/app.html' 
  });

angular.module('video-player')
  .component('app', {
    controller: ['youTube', function(youTube) {
      this.videos = window.exampleVideoData;
      this.video = window.exampleVideoData[0];
      this.handleVidChange = (index) => {
        console.log(this);
        let currentVidList = this.videos;
        this.video = currentVidList[index];
      };
      this.handleSearch = function(query) {
        console.log('search click!', query);
        //take in query and find videos that match
      };
    }],
    templateUrl: 'src/templates/app.html' 
  });

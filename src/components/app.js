angular.module('video-player')
  .component('app', {
    controller: ['youTube', 'commentLoader', function(youTube, commentLoader) {
      this.videos = [];
      this.video = {};
      
      this.handleVidChange = (index) => {
        let currentVidList = this.videos;
        this.video = currentVidList[index];
      };
      this.renderVideos = (list) => {
        this.videos = list;
        this.video = list[0];
      };
      this.handleSearch = (query) => {
        youTube(query, this.renderVideos);
      };
      this.handleSearch('How to Angular');
    }],
    templateUrl: 'src/templates/app.html' 
  });

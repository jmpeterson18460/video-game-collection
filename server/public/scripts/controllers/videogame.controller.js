videoGameApp.controller('VideoGameController', ['VideoGameService', function(VideoGameService){
    console.log('VideoGameController loaded');
    const self = this;

    self.videogames = VideoGameService.videogames
    self.addVideoGame = VideoGameService.addVideoGame
    self.delVideogame = VideoGameService.delVideoGame
    self.system = VideoGameService.systems



}])
videoGameApp.controller('SystemController', ['VideoGameService', function(VideoGameService){
    console.log('SystemController loaded');
    const self = this;

    self.addSystem = VideoGameService.addSystems
    self.system = VideoGameService.systems
    self.getSystem = VideoGameService.getSystems

}])
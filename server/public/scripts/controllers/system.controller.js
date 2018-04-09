videoGameApp.controller('SystemController', ['VideoGameService', function(VideoGameService){
    console.log('SystemController loaded');
    const self = this;



    self.system = VideoGameService.systems
    self.oneSystem = VideoGameService.oneSystem
    self.addSystem = VideoGameService.addSystems




    
    self.getSystem = VideoGameService.getOneSystem
    self.delSystem = VideoGameService.delSystem

}])
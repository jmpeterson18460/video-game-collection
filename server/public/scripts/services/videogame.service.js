videoGameApp.service('VideoGameService', ['$http', function($http){
    console.log('VideoGameService is loaded');
    const self = this;

    self.videogames = { list : [] };
    self.systems = { list : [] };
    self.specificSystem = { list: [] };

    self.getVideoGames = function(){
        console.log('Getting video games!');
        $http.get('/videogame').then((response) => {
            self.videogames.list = response.data;
        })
        
    }

    self.getSystems = function(){
        console.log('Getting systems!');
        $http.get('/system').then((response) => {
            self.systems.list = response.data;
        })
        
    }

    self.addVideoGame = function(videogame){
        console.log('Adding video game!');
        $http.post('/videogame', videogame).then((response) => {
            console.log('Successfully posted video game!');
            self.getVideoGames()

        }).catch((error) => {
            console.log('Error in posting video game: ', error);
            
        })

    }

    self.addSystems = function(system){
        console.log('Adding system!', system);
        $http.post('/system', system).then((response) => {
            console.log('Successfully posted system!');
            self.getSpecificSystem(system);
            
        }).catch((error) => {
            console.log('Error in posting system: ', error);
        })
    }

    self.delVideoGame = function(videogame){
        console.log('Deleting video game');
        $http.delete(`/videogame/${videogame.id}`).then((response) => {
            console.log('Successfully deleted video game!');
            self.getVideoGames()
            
        }).catch((error) => {
            console.log('Error in deleting video game: ', error);
        })
        
    }

    self.getVideoGames()
    self.getSystems()
    
}])
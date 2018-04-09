videoGameApp.service('VideoGameService', ['$http',function($http, $route){
    console.log('VideoGameService is loaded');
    const self = this;

    

    self.videogames = { list : [] };
    self.systems = { list : [] };
    self.oneSystem = { list: [] };


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
        }).catch((error) =>{
            console.log('Error in getting systems: ', error);
            
        })
        
    }

    self.getOneSystem = function(system){
        console.log('Getting system!', system);
        self.oneSystem.list = [];
        $http.get('/system?id=' + system.system_id).then((response) => {
            console.log('Got system!');
            console.log('response.data= ', response.data);
        
            self.oneSystem.list = response.data;
        }).catch((error) =>{
            console.log('Error in getting systems: ', error);
            
        })
        
    }

    self.addVideoGame = function(videogame){
        console.log('Adding video game!');
        console.log('Videogame: ', videogame);
        
        $http.post('/videogame', videogame).then((response) => {
            console.log('Successfully posted video game!');
            self.getVideoGames();

        }).catch((error) => {
            console.log('Error in posting video game: ', error);
            
        })

    }

    self.addSystems = function(system){
        console.log('Adding system!', system);
        $http.post('/system', system).then((response) => {
            console.log('Successfully posted system!');
            self.getSystems();
            
        }).catch((error) => {
            console.log('Error in posting system: ', error);
        })
    }

    self.delVideoGame = function(videogame){
        console.log('Deleting video game');
        console.log('Videgame id: ', videogame.id);
        
        $http.delete(`/videogame/${videogame.id}`).then((response) => {
            console.log('Successfully deleted video game!');
            self.getVideoGames()
            
        }).catch((error) => {
            console.log('Error in deleting video game: ', error);
        })
        
    }

    self.delSystem = function(system){
        if (system.count > 0){
            alert("You can't delete a system with games in it!")
        }else {
            $http.delete('/system/' + system.id).then(function(response){
                console.log('Successfully deleted system!');
                self.getSystems();
                
            }).catch((error) => {
                console.log('Error in deleting system: ', error);
            })
        }
        
    }

    self.getVideoGames()
    self.getSystems()
    
}])
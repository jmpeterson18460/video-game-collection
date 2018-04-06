const express = require('express');
const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('Getting videogames');
    let queryText = `SELECT * FROM "video_games" JOIN "systems" 
                    ON "video_games"."system_id" = "systems"."id"`;
    pool.query(queryText).then((result) => {
        console.log('GET results: ', result.rows);
        
        res.send(result.rows)
        
    }).catch((error) => {
        console.log('Error in getting videogames: ', error);
        res.sendStatus(500);  
    })  
})

router.post('/', (req, res) => {
    console.log('Posting video game!');
    const videogame = req.body;
    console.log('Videogame sent: ', videogame);
    
    const queryText = `INSERT INTO "video_games" 
                        ("name", "release_date", "rating", "pic", "system_id")
                        VALUES ($1, $2, $3, $4, $5);`
    
    pool.query(queryText, [videogame.name, videogame.release_date, videogame.rating, 
                            videogame.pic, videogame.system_id])
    .then((response) =>{
        console.log('Successfully posted videogame!');
        res.sendStatus(200);
                                
    }).catch((error) => {
        console.log('Error in posting videogame: ', error);
        res.sendStatus(500);
                                
    })
    
})

router.delete('/:id', (req, res) => {
    console.log('Deleting videogame');
    const videogameId = req.params.id;
    const queryText = `DELETE FROM "video_games" WHERE id = $1;`

    pool.query(queryText, [videogameId]).then((response) => {
        console.log('Successfully deleted videogame!');
        res.sendStatus(200);
        
    }).catch((error) => {
        console.log('Error in deleting videogame: ', error);
        res.sendStatus(500);
        
    })
    
})


module.exports = router
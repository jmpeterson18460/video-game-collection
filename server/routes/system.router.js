const express = require('express');
const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const system = req.query.id;
    if(system != undefined){
        console.log('Getting system!');
        
        const queryText = `SELECT "names", "systems"."id", count("video_games"."system_id") FROM "video_games" RIGHT JOIN "systems" ON "video_games"."system_id" = "systems"."id" WHERE "systems"."id" = $1 GROUP BY "systems"."id", "names";`

        pool.query(queryText, [system]).then((result) => {
            console.log('Got system!');
            console.log('result.rows: ', result.rows);
            res.send(result.rows);
            
        }).catch((error) => {
            console.log('Error in getting system: ', error);
            res.sendStatus(500);
        })
    } else {

        console.log('req.query ', req.query.id);
    
        console.log('Getting systems!');
        const queryText = `SELECT * FROM systems;`

        pool.query(queryText).then((result) => {
            console.log('Got systems!');
            res.send(result.rows);
        
        }).catch((error) => {
            console.log('Error in getting systems: ', error);
            res.sendStatus(500);
        })

    }
    
})

router.post('/', (req, res) => {
    console.log('Posting system!');
    const system = req.body;
    const queryText = `INSERT INTO "systems" ("names") VALUES ($1);`

    pool.query(queryText, [system.name]).then((response) => {
        console.log('Successfully posted system!');
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in posting system: ', error);
        res.sendStatus(500);
    })
    
})

router.delete('/:id', (req, res) => {
    console.log('Deleting system');
    const systemId = req.params.id
    const queryText = `DELETE FROM "systems" WHERE id = $1;`

    pool.query(queryText, [systemId]).then((response) => {
        console.log('Successfully deleted system!');
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in deleting system: ', error);
        res.sendStatus(500);
    })
    
})


module.exports = router
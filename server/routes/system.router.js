const express = require('express');
const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('req.body = ', req.body.id);
    
    console.log('Getting systems!');
    const queryText = `SELECT * FROM systems;`

    pool.query(queryText).then((result) => {
        console.log('Got systems!');
        res.send(result.rows);
        
    }).catch((error) => {
        console.log('Error in getting systems: ', error);
        res.sendStatus(500);
    })
    
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


module.exports = router
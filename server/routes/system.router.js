const express = require('express');
const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
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


module.exports = router
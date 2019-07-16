const express = require('express');
const db = require('../data/db-config.js');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cars = await db('car-dealer');
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve cars' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const fruit = await db('car-dealer').where({ id });

        res.json(fruit);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve car' });
    }
});

router.post('/', async (req, res) => {
    try {
        const fruitData = req.body;
        const [id] = await db('car-dealer').insert(fruitData);
        const newFruitEntry = await db('car-dealer').where({ id });

        res.status(201).json(newFruitEntry);
    } catch (err) {
        console.log('POST error', err);
        res.status(500).json({ message: "Failed to store data" });
    }
});

module.exports = router;
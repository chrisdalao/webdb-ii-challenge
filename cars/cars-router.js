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
        const car = await db('car-dealer').where({ id });

        res.json(car);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve car' });
    }
});

router.post('/', async (req, res) => {
    try {
        const carData = req.body;
        const [id] = await db('car-dealer').insert(carData);
        const newCarEntry = await db('car-dealer').where({ id });

        res.status(201).json(newCarEntry);
    } catch (err) {
        console.log('POST error', err);
        res.status(500).json({ message: "Failed to store data" });
    }
});

router.put('/:id', (req, res) => {
    db('car-dealer')
        .where({ id: req.params.id })
        .update(req.body)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: `${count} record(s) updated` });
            } else {
                res.status(404).json({ message: "record not found" })
            }
        })
        .catch(error => {
            res.status(500).json(error);
        })
});


router.delete('/:id', (req, res) => {
    db('car-dealer')
        .where({ id: req.params.id })
        .del()
        .then(count => {
            res.status(200).json({ message: `${count} record(s) deleted` });
        })
        .catch(error => {
            res.status(500).json(error);
        })
});



module.exports = router;
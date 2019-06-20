//ROUTES: /api/routes
const express = require('express')
const router = express.Router()
const db_zoos = require('../data/zoo_model')

//middleware

//C
router.post('/', async (req, res) => {
    try {
        const {name} = req.body
        const zoo = await db_zoos.add({name})
        ?   res.status(201).json(zoo)
        :   res.status(404).json({message: `Zoo couldn't be added.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//R
router.get('/', async (req, res) => {
    try {
        const zoos = await db_zoos.find()
        zoos.length > 0
        ?   res.status(200).json(zoos)
        :   res.status(404).json({message: `No zoos found.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.get('/:id', async (req, res) => {
    try {
        const zoo = await db_zoos.findById(req.params.id)
        zoo
        ?   res.status(200).json(zoo)
        :   res.status(404).json({message: `No zoo found.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//U
router.put('/:id', async (req, res) => {
    try {
        await db_zoos.update(req.params.id, req.body)
        ?   res.status(200).json({id: req.params.id, ...req.body})
        :   res.status(404).json({message: `Zoo ${req.params.id} not found.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//D

module.exports = router
const express = require('express')

const Tasks = require('./task-model')

const router = express.Router()

router.get('/', (req, res) => {
    Tasks.get()
        .then(tasks => {
            res.status(200).json({ tasks })
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Tasks.getById(id)
        .then(task => {
            if (!task) {
                res.status(404).json({ message: `Task with ID ${id} not found` })
            } else {
                res.status(200).json({ task })
            }
        })
        .catch (err => {
            res.status(500).json({ error: err.message })
        })
})

router.post('/', (req, res) => {
    Tasks.insert(req.body)
        .then(ids => {
            const id = ids[0]
            return Tasks.getById(id)
        })
        .then(task => {
            res.status(201).json({ task })
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

module.exports = router
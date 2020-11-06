const express = require('express')

const Resources = require('./resource-model')

const router = express.Router()

router.get('/', (req, res) => {
    Resources.get()
        .then(resources => {
            res.status(200).json({ resources })
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Resources.getById(id)
        .then(resource => {
            if (!resource) {
                res.status(404).json({ message: `Resource with ID ${id} not found` })
            } else {
                res.status(200).json({ resource })
            }
        })
        .catch (err => {
            res.status(500).json({ error: err.message })
        })
})

router.post('/', (req, res) => {
    Resources.insert(req.body)
        .then(ids => {
            const id = ids[0]
            return Resources.getById(id)
        })
        .then(resource => {
            res.status(201).json({ resource })
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

module.exports = router
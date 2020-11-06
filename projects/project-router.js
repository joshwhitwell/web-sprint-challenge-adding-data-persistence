const express = require('express')

const Projects = require('./project-model')

const router = express.Router()

router.get('/', (req, res) => {
    Projects.get()
        .then(projects => {
            res.status(200).json({ projects })
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Projects.getById(id)
        .then(project => {
            if (!project) {
                res.status(404).json({ message: `Project with ID ${id} not found` })
            } else {
                res.status(200).json({ project })
            }
        })
        .catch (err => {
            res.status(500).json({ error: err.message })
        })
})

router.post('/', (req, res) => {
    Projects.insert(req.body)
        .then(ids => {
            const id = ids[0]
            return Projects.getById(id)
        })
        .then(project => {
            res.status(201).json({ project })
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

module.exports = router
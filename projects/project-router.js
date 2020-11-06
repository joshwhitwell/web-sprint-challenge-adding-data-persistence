const express = require('express')

const Projects = require('./project-model')

const router = express.Router()

router.get('/', (req, res) => {
    Projects.get()
        .then(projects => {
            res.status(200).json({ data: projects })
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

module.exports = router
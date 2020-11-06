const db = require('../data/db-config')

function get() {
    return db('projects')
}

module.exports = {
    get
}
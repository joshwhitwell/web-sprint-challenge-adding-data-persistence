const db = require('../data/db-config')

function get() {
    return db('resources')
}
function getById(resource_id) {
    return db('resources')
        .where({ resource_id })
        .first()
}

function insert(resource) {
    return db('resources')
        .insert(resource)
}

module.exports = {
    get,
    getById,
    insert
}
const db = require('../data/db-config')

function get() {
    return db('projects')
}
function getById(id) {
    return db('projects')
        .where({ 'project_id': id })
        .first()
}

function insert(project) {
    return db('projects')
        .insert(project)
}

module.exports = {
    get,
    getById,
    insert
}
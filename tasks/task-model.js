const db = require('../data/db-config')

function get() {
    return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 't.project_id', 'p.project_name', 'p.project_description')
        .orderBy('t.project_id')
}
function getById(task_id) {
    return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 't.project_id', 'p.project_name', 'p.project_description')
        .where({ task_id })
        .first()
}

function insert(task) {
    return db('tasks')
        .insert(task)
}

module.exports = {
    get,
    getById,
    insert
}
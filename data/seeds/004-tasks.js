exports.seed = function (knex) {
  return knex('tasks').insert([
    { task_description: 'Vacuum', task_notes: 'Dust the counter tops first.', task_completed: false, project_id: 1 },
    { task_description: 'Mop', task_notes: 'Vacuum first.', task_completed: false, project_id: 1 },
    { task_description: 'Clean Bathrooms', task_completed: false, project_id: 1 },

    { task_description: 'Mow Lawn', task_notes: 'Rake leaves first.', task_completed: false, project_id: 2 },
    { task_description: 'Rake Leaves', task_completed: true, project_id: 2 },
    { task_description: 'Water plants', task_notes: 'Fertilize tomatos.', task_completed: true, project_id: 2 },

    { task_description: 'Design blueprints', task_notes: 'DBdesigner can help.', task_completed: false, project_id: 3 },
    { task_description: 'Buy materials', task_notes: 'Sale at Home Depot', task_completed: false, project_id: 3 },
    { task_description: 'Build', task_completed: false, project_id: 3 }
  ])
}

exports.seed = function (knex) {
  return knex('projects').insert([
    { project_name: 'Clean House', project_description: 'Clean house to prepare for relatives\' visit.' },
    { project_name: 'Yard Work', project_description: 'Prepare house exterior and yard for fall.' },
    { project_name: 'Build Shed', project_description: 'Build shed to store outdoor tools.' }
  ])
}

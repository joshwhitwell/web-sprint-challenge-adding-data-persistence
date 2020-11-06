exports.seed = function (knex) {
  return knex('resources').insert([
    { resource_name: 'Vacuum', resource_description: 'Dyson Ball Animal 2' },
    { resource_name: 'Lawn Mower', resource_description: 'Honda 21 in. Nexite Deck Hydrostatic Cruise Control Gas Walk Behind Self-Propelled Mower with Blade Stop' },
    { resource_name: 'Hammer' }
  ])
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'Hoshi', pet_type_id: 3},
    {id: 2, name: 'Pumpkin', pet_type_id: 2},
    {id: 3, name: 'Sprinkles', pet_type_id: 1},
    {id: 3, name: 'Sebastian', pet_type_id: 3},
    {id: 3, name: 'Cupcake', pet_type_id: 4},
  ]);
};

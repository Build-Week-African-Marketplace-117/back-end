
exports.seed = async function(knex) {
  await knex("users").truncate()
  await knex("items").truncate()
  await knex("categories").truncate()
};


exports.seed = async function(knex) {
  await knex("items").insert([
    {id: 1, location: "Morocco", name: "Bananas", description: "All organic and ready to make some Banana Bread!", price: 5.23}
  ])
};

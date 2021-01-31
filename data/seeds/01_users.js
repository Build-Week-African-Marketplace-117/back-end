
exports.seed = async function(knex) {
  await knex("users").insert([
    {id: 1, username: "Dog_Lover", email: "dogsRule@gmail.com", password: "doggos"},
    {id: 2, username: "Cat_Lover", email: "catsRule@gmail.com", password: "kitties"},
  ])
};

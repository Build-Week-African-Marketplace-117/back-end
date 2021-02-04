const hashedPassForDog = "$2a$10$U8BROdwcHJOWyqM27s0VzuyZx3zSKw94PDlJ985mMsdpZpX2zCwb2" 
const hashedPassForCat = "$2a$10$Ff4XZAGc5WHKGN8cA6PbvOKaUFJ/WP9WBMKAxU0y7fLWeXMzq3HPa"
const hashedPassForBird = "$2a$10$7GSZ9328Ljz/cxF7AGR52OQ/2OJR54aZ93YyKobLKyl7Ap9vdbsvS"
const hashedPassForDrag = "$2a$10$vPaXbbxC8wPJ1xPOFNyK9.Xq3U7dNLJaiB7a0x2d5LUm0C3/OMlp."

// Originals are "doggos", "kitties", "birbs", and "smaug". 

exports.seed = async function(knex) {
  await knex("users").insert([
    {id: 1, username: "Dog_Lover", email: "dogsRule@gmail.com", password: hashedPassForDog},
    {id: 2, username: "Cat_Lover", email: "catsRule@gmail.com", password: hashedPassForCat},
    {id: 3, username: "Bird_Lover", email: "birdsRule@gmail.com", password: hashedPassForBird},
    {id: 4, username: "Dragon_Lover", email: "dragonsRule@gmail.com", password: hashedPassForDrag},
  ])
};

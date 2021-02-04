exports.seed = async function(knex){
    await knex("users_items").insert([
        {user_id: 1, item_id: 1},
        {user_id: 1, item_id: 2},
        {user_id: 2, item_id: 3},
        {user_id: 2, item_id: 4},
        {user_id: 3, item_id: 5},
        {user_id: 3, item_id: 6},
        {user_id: 4, item_id: 7},
        {user_id: 4, item_id: 8},
        
    ])
}

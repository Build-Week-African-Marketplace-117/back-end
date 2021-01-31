const express = require("express");
const Items = require("../models/items-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        res.json(await Items.find())
    } catch (err){
        next(err)
    }
})

router.post("/list", async (req, res, next) => {
    try {
        const {location, name, description, price} = req.body;
        
        const newItem = await Items.add({
            location,
            name,
            description,
            price
        })

        res.status(201).json(newItem)
    } catch (err){
        next(err)
    }
})

module.exports = router;
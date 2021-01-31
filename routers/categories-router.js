const express = require("express")
const Categories = require("../models/categories-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        res.json(await Categories.find())
    } catch (err){
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const {name, priceLow, priceHigh} = req.body;
        const category = await Categories.findByName(name)

        if (category) {
            return res.status(409).json({
                message: "Category name is taken",
            })
        }

        const newCategory = await Categories.add({
            name,
            priceLow,
            priceHigh
        })

        res.status(201).json(newCategory)
    } catch (err){
        next(err)
    }
})

module.exports = router;
const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Users = require("../models/users-model")

const router = express.Router()

// Endpoint to retrieve list of Users. 
router.get("/", async (req, res, next) => {
    try {
        res.json(await Users.find())
    } catch (err){
        next(err)
    }
})
// Endpoint for Registering a new User.
router.post("/register", async (req, res, next) => {
    try {
        const {username, email, password} = req.body;
        const user = await Users.findByUsername(username)

        if (user) {
            return res.status(409).json({
                message: "Username is already taken",
            })
        }

        const newUser = await Users.add({
            username,
            email,
            password: await bcrypt.hash(password, 10)
        })

        res.status(201).json(newUser)
    } catch (err){
        next(err)
    }
})
// Endpoint for Logging In an existing User
router.post("/login", async (req, res, next) => {
    try {
        const {username, password} = req.body;
        const user = await Users.findByUsername(username)

        if (!user) {
            return res.status(401).json({
                message: "Invalid Credentials",
            })
        }

        const passwordValid = await bcrypt.compare(password, user.password)

        if (!passwordValid) {
            return res.status(401).json({
                message: "Invalid Credentials",
            })
        }
        const token = jwt.sign({
            userId: user.id,
        }, process.env.JWT_SECRET)

        res.cookie("token", token)

        res.json({
            message: `Welcome ${user.username}`,
        })
    } catch (err){
        next(err)
    }
})

module.exports = router;
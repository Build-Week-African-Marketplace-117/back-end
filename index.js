require("dotenv").config()

const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const usersRouter = require("./routers/users-router")
const categoriesRouter = require("./routers/categories-router")
const itemsRouter = require("./routers/items-router")

const server = express()
const port = process.env.PORT || 5000

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(cookieParser())

server.use("/api/users", usersRouter)
server.use("/api/categories", categoriesRouter)
server.use("/api/items", itemsRouter)

server.use((err, req, res, next) => {
    console.log(err)

    res.status(500).json({
        message: "Something went wrong",
    })
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})
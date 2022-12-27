/*
    main file, edit this file if needed.
*/

import dotenv from "dotenv"
import express from "express"
import loger from "morgan"
import cors from "cors"
import config from "./src/configs/index.js"

// import router
import Router from "./src/routes/index.js"
import Auth from "./src/routes/auth.js"

dotenv.config()
config.dbConnection()
const app = express()

app.use(cors(config.env.ALLOW_CORS))
app.use(loger("common"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use("/api", Router)
app.use("/auth", Auth)

// 404 handle
app.use((req, res, next) => {
    config.response(res, 404, "Path not found !")
})

// error handle
app.use((err, req, res, next) => {
    config.response(res, 500, err)
})

app.listen(config.env.PORT, () => {
    console.log(`Apps runing on port ${config.env.PORT}`)
})

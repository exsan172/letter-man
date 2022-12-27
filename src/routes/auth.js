/*
    routes file, edit this file to write your routes
*/

import express from "express"
import Controllers from "../controllers/auth.js"

const router = express.Router()

router.post("/login", Controllers.login)
router.post("/register", Controllers.register)

export default router

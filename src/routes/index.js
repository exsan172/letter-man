/*
    routes file, edit this file to write your routes
*/

import express from "express"
import Controllers from "../controllers/index.js"
import Middleware from "../middleware/jwt.middleware.js"
import Helper from "../helpers/index.js"

const router = express.Router()

router.get("/profile/:id", Middleware, Controllers.profile)
router.post("/letter", Middleware, Helper.single("letter_images"), Controllers.letter_input)
router.get("/letter", Middleware, Controllers.letter_list)

export default router

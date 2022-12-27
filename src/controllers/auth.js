/*
    controller file, edit this file to write your controller
*/

import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import config from "../configs/index.js"
import models from "../models/index.js"
const saltRound = 10

export default {
    register: async (req, res, next) => {
        try {
            const findEmail = await models.usersSchema.findOne({ email : req.body.email })
            if(findEmail !== null) {
                return config.response(res, 400, "email already used!")
            }

            const genSalt  = bcrypt.genSaltSync(saltRound) 
            const hashPass = bcrypt.hashSync(req.body.password, genSalt)
            const createUser = await models.usersSchema.create({
                name        : req.body.name,
                email       : req.body.email,
                phone       : req.body.phone,
                password    : hashPass,
                role        : "admin",
                createdAt   : await config.timeNow()
            })
            config.response(res, 201, "user created!", createUser)

        } catch (error) {
            config.response(res, 400, error.message)
        }
    },
    login: async (req, res, next) => {
        try {
            const findEmail = await models.usersSchema.findOne({ email : req.body.email })
            if(findEmail === null) {
                return config.response(res, 400, `user with email : ${req.body.email} not found in our database!`)
            }

            const comparePass = bcrypt.compareSync(req.body.password, findEmail.password)
            if(comparePass) {
                return config.response(res, 200, `success!`, {
                    token : jwt.sign({
                        user_id : findEmail._id,
                        user_name : findEmail.name,
                        user_email : findEmail.email
                    }, process.env.SECRET_KEY),
                    user_id : findEmail._id
                })

            } else {
                return config.response(res, 400, `email or password invalid!`)

            }

        } catch (error) {
            config.response(res, 400, error.message)
        }
    },
}

/*
    controller file, edit this file to write your controller
*/

import config from "../configs/index.js"
import models from "../models/index.js"

export default {
    profile: async (req, res, next) => {
        try {
            const profile = await models.usersSchema.findOne({ _id : req.params.id }).select('-password')
            if(profile !== null) {
                return config.response(res, 200, "success", profile)

            } else {
                return config.response(res, 400, "user not found!")

            }
        } catch (error) {
            config.response(res, 400, error.message)
        }
    },
    letter_input: async (req, res, next) => {
        try {
            const createLetter = await models.letterSchema.create({
                images_letter_url       : req.file.path,
                sender_identity         : req.body.sender_identity,
                letter_destination      : req.body.letter_destination,
                letter_number           : req.body.letter_number,
                letter_date             : req.body.letter_date,
                letter_discription      : req.body.letter_discription,
                letter_kinds            : req.body.letter_kinds,
                createdAt               : await config.timeNow()
            })

            return config.response(res, 200, "success", createLetter)

        } catch (error) {
            config.response(res, 400, error.message)
        }
    },
    letter_list: async (req, res, next) => {
        try {
            if(req.params.letter === "in") {
                const letterIn  = await models.letterSchema.find({ letter_kinds : "letter_in" }).sort({ createdAt: -1 }).limit(15)
                return config.response(res, 200, "success", letterIn)

            } else if(req.params.letter === "out") {
                const letterOut = await models.letterSchema.find({ letter_kinds : "letter_out" }).sort({ createdAt: -1 }).limit(15)
                return config.response(res, 200, "success", letterOut)

            } else {
                return config.response(res, 400, "letter params must be in or out!")

            }
            
        } catch (error) {
            config.response(res, 400, error.message)
        }
    },
}

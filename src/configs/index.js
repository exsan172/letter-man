/*
    config file, edit this file to write your config
*/
import moment from "moment-timezone"
import mongoose from "mongoose"

const config = {
    env: process.env,
    response: (res, code, message=null, data = null, otherData=null) => {
        let dataJson = {
            statusCode: code,
        }

        if(message !== null) {
            dataJson["message"] = message
        }

        if (data !== null) {
            dataJson["data"] = data
        }

        if(otherData !== null) {
            for(const i in otherData) {
                dataJson[i] = otherData[i]
            }
        }

        return res.status(code).json(dataJson)
    },
    timeNow : async () => {
        return await moment().tz("Asia/Jakarta").utc(true)
    },
    dbConnection : async () => {
        try {
            await mongoose.set("strictQuery", false);
            await mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true, dbName: process.env.DB_NAME});
            console.log("Database connection success.")
    
        } catch(err) {
            console.log("Database connection failed.")
        }
    }
}

export default config

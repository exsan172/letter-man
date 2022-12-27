import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    phone : {
        type : Number,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    role : {
        type : String,
        require : true,
        enum : ['user', 'admin']
    },
    createdAt : {
        type : Date,
        require : true
    }
})

export default mongoose.model("user", userSchema)
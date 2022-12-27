import mongoose from "mongoose"

const complaintSchema = mongoose.Schema({
    images_letter_url : {
        type : String,
        require : true
    },
    images_letter_name : {
        type : String,
        require : true
    },
    sender_identity : {
        type : String,
        require : true
    },
    letter_destination : {
        type : String,
        require : true
    },
    letter_number : {
        type : Number,
        require : true
    },
    letter_date : {
        type : String,
        require : true
    },
    letter_discription : {
        type : String,
        require : true
    },
    letter_kinds : {
        type : String,
        require : true,
        enum : ['letter_in', 'letter_out', 'letter_archive']
    },
    createdAt : {
        type : Date,
        require : true
    }
})

export default mongoose.model("complaint", complaintSchema)
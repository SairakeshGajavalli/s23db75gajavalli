const mongoose = require("mongoose")
const earbudsSchema = mongoose.Schema({
    earbuds_brand: {
        type: String,
        required:[true,"Earbuds brand Name is required"]
    },
    earbuds_quantity: {
        type:String,
        required:true
    },
    earbuds_cost: {
        type: String,
        required:true
    }
    })
module.exports = mongoose.model("Earbuds",earbudsSchema) 
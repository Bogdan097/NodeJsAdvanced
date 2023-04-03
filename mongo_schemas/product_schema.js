import mongoose, { Types } from "mongoose";

const {Schema}  = mongoose ;

const productSchema = new Schema({
    name : {
        type : String
    } ,
    description: {
        type : String
    },
    price:{
        type : Number
    },
    reviews:{
        type : Array
    }
    
})

export default productSchema ;

import mongoose, { SchemaTypes } from "mongoose";

const {Schema} = mongoose;

const orderSchema = new Schema({
    order_data:{
        type: String
    },
    items:[
        {
            type:Schema.Types.ObjectId,
            ref:"Product"
        }
    ],
    reviews:[
        {
        type : Schema.Types.ObjectId,
        ref:"Product"
        }
    ],
    required : true 

})

export default orderSchema ;

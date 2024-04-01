import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        description:String,
        salary:Number,
        city:String,
    },{
        timestamps:true,
    }
)

export const products = mongoose.model.products ||  mongoose.model("products",productsSchema);
const mongoose=require('mongoose');
const {Schema}=mongoose;
const proschema= new Schema ({
    prix:Number,
    color:String
});


const product=mongoose.model('product',proschema,'product')
module.exports={
    product:product,
    }








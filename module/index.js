const mongoose=require('mongoose');
const {Schema}=mongoose;
const userschema= new Schema ({
    name:String,
    age:Number,
    heigth:String
});


const user=mongoose.model('user',userschema,'user')
module.exports={
    user:user,
    }








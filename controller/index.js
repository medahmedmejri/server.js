const{user}=require('../module/index.js');

const getusers= async(req,res)=>{
try{
const users= await  user.find();
res.status(200).json(users);
}
catch(error){
    console.error('error in get  users',error);
    res.status(500)
}
}; 

const getoneusers= async(req,res)=>{
    try{
  const  oneuser= await user.findById(req.params.id).exec();
  res.status(200).json(oneuser);
    }
    catch(error){
        console.error('error in get  users',error);
        res.status(500);

    }
}

const postUser = async(req,res)=>{
    const { name, age, heigth } = req.body;
    const newUser = new user({
        name,
        age,
        heigth
    });
    try{  
              
        const postuser = await newUser.save();
        res.status(200).json({
          success: true ,postuser})
          console.log("marhbe bik")
    }
    catch(error){
        console.error('error in post  users',error);
        res.status(501);
    }
}

const deleteUser = async(req,res)=>{
    try{
        const userId = req.params.id;
        const deleteOne = await user.findByIdAndDelete(userId);
        if(!deleteOne){
            return res.status(404).json({
                message : 'User not found'
            })
        }
        res.json({
            message : 'User deleted',user : deleteOne})
    }
    catch(error){
        console.error('error in delte  users',error);
        res.status(505);
    }
}

const editUser = async(req,res)=>{
    try{
        const userId = req.params.id;
        const update = req.body;
        const updateUser = await user.findByIdAndUpdate(userId,update,{new:true });
        if(!updateUser){
            return res.status(404).json({
                message : 'User not found'
            })
        }
        res.json({
            message : 'user  updated sucssessefly',user : updateUser
        })
    }
    catch(error){
        console.error('error in delte  users',error);
        res.status(505);
    }
}

module.exports={getusers,getoneusers,postUser,deleteUser,editUser}


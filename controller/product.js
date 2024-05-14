const{product}=require('../module/product.js');


const getproduct= async(req,res)=>{
    try{
    const products= await  product.find();
    res.status(200).json(products);
    }
    catch(error){
        console.error('error in get  products',error);
        res.status(500)
    }
    }; 


    const deleteproduct = async(req,res)=>{
        try{
            const proId = req.params.id;
            const deleteOne = await product.findByIdAndDelete(proId);
            if(!deleteOne){
                return res.status(404).json({
                    message : 'product not found'
                })
            }
            res.json({
                message : 'product deleted',user : deleteproduct})
        }
        catch(error){
            console.error('error in delte  product',error);
            res.status(505);
        }
    }
    const editproduct = async(req,res)=>{
        try{
            const proId = req.params.id;
            const update = req.body;
            const updatepro = await product.findByIdAndUpdate(proId,update,{new:true });
            if(!updatepro){
                return res.status(404).json({
                    message : 'User not found'
                })
            }
            res.json({
                message : 'user  updated sucssessefly',product : updatepro
            })
        }
        catch(error){
            console.error('error in delte  users',error);
            res.status(505);
        }
    }
    const postproduit= async(req,res)=>{
        const { prix, color } = req.body;
        const newProd = new product({
            prix,
            color
        });
        try{  
                  
            const postprod = await newProd.save();
            res.status(200).json({
              success: true ,postprod})
              console.log("marhbe bik")
        }
        catch(error){
            console.error('error in post  users',error);
            res.status(501);
        }
    }



    module.exports={getproduct,deleteproduct,editproduct,postproduit}
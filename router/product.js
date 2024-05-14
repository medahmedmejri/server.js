const  {Router}=require('express');
const {getproduct,deleteproduct,editproduct,postproduit}=require('../controller/product.js');
const routers=Router();


routers.get("/product",getproduct);
routers.delete("/product/:id",deleteproduct);
routers.put("/product/:id",editproduct);
routers.post("/product",postproduit)

module.exports=routers
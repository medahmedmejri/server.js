const  {Router}=require('express');
const {getusers,getoneusers,postUser,deleteUser,editUser}=require('../controller/index.js');
const router=Router();



router.get("/users",getusers);
router.get("/user/:id",getoneusers);



router.post("/postUser",postUser)
router.delete("/user/:id",deleteUser)
 router.put("/user/:id",editUser)

module.exports=router

const express=require('express')
const app=express()
const port=1111




app.listen(port,()=>{
    console.log("app listen at http//localhost:",port)
})
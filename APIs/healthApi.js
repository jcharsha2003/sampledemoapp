const exp=require("express")
const healthapp=exp.Router()
const expressAsyncHandler=require("express-async-handler")



healthapp.get("/data",expressAsyncHandler(async(request,response)=>{
    // get healthCollection
    const healthCollection=request.app.get("healthCollection")
   let data=await healthCollection.find().toArray()
   response.status(200).send({message:"data list",payload:data})
    
  }))
  
module.exports=healthapp
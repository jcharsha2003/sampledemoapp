const exp=require("express")
const workapp=exp.Router()
const expressAsyncHandler=require("express-async-handler")



workapp.get("/data1",expressAsyncHandler(async(request,response)=>{
    // get jobCollection
    const workCollection=request.app.get("workCollection")
   let data=await workCollection.find().toArray()
   response.status(200).send({message:"data list",payload:data})
    
  }))
  

  
module.exports=workapp
const exp=require("express")
const jobapp=exp.Router()
const expressAsyncHandler=require("express-async-handler")



jobapp.get("/data",expressAsyncHandler(async(request,response)=>{
    // get jobCollection
    const jobCollection=request.app.get("jobCollection")
   let data=await jobCollection.find().toArray()
   response.status(200).send({message:"data list",payload:data})
    
  }))
  

  
module.exports=jobapp
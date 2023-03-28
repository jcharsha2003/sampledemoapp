const exp=require("express")
const accomodationapp=exp.Router()
const expressAsyncHandler=require("express-async-handler")



accomodationapp.get("/data",expressAsyncHandler(async(request,response)=>{
    // get accomodationcollection
    const accomodationCollection=request.app.get("accomodationCollection")
   let data=await accomodationCollection.find().toArray()
   response.status(200).send({message:"data list",payload:data})
    
  }))
  
module.exports=accomodationapp
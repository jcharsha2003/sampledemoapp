
const { response } = require("express")
const exp=require("express")
const productapp=exp.Router()
let expressAsyncHandler=require("express-async-handler")

//creating a  Product  api 
let products=[]

// get route
productapp.get("/get-products",expressAsyncHandler(async(request,response)=>{
  // get productcollection
  const productCollection=request.app.get("productCollection")
 let products=await productCollection.find().toArray()
 response.status(200).send({message:"Products list",payload:products})
  
}))

// get unique id route
productapp.get("/get-product/:id",expressAsyncHandler(async(request,response)=>{
  // get productcollection
const productCollection=request.app.get("productCollection")
let productObj=await productCollection.findOne({id:(+request.params.id)})
response.status(200).send({message:"Product list",payload:productObj})
}))



// json to java script obj
productapp.use(exp.json())

//Post route 
productapp.post("/create-product",expressAsyncHandler(async(request,response)=>{
  
  // get productcollection
  const productCollection=request.app.get("productCollection")
  //    get user from req
  const newProduct=request.body;
  // save or insert or create a newProduct in productCollection
  await productCollection.insertOne(newProduct)
  response.status(201).send({message:"product created"})


}))

// Put route
productapp.put("/update-product",expressAsyncHandler(async(request,response)=>{
 
  // get productcollection
  const productCollection=request.app.get("productCollection")
  let modifiedProduct=request.body;
 await productCollection.updateOne({id:modifiedProduct.id},{$set:{...modifiedProduct}})
 
    response.status(200).send({message:"product has been modified successfully"})
  
}))

// Delete route
productapp.delete("/delete-product/:id",expressAsyncHandler(async(request,response)=>{
   
  // get productcollection
 const productCollection=request.app.get("productCollection")
   await productCollection.deleteOne({id:(+request.params.id)})
  
    response.status(200).send({message:"product has been deleted successfully"})
 
  
}))
module.exports=productapp
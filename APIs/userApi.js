
const exp=require("express")
const userapp=exp.Router()
const expressAsyncHandler=require("express-async-handler")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")

//creating a user api 
let users=[]
userapp.get("/get-users",expressAsyncHandler(async(request,response)=>{
    // get usercollection
    const userCollection=request.app.get("userCollection")
   let users=await userCollection.find().toArray()
   response.status(200).send({message:"users list",payload:users})
    
  }))

userapp.get("/get-user/:id",expressAsyncHandler(async(request,response)=>{
    // get usercollection
    const userCollection=request.app.get("userCollection")
  let userObj=await userCollection.findOne({id:(+request.params.id)})
  response.status(200).send({message:"user list",payload:userObj})
  }))



// json to java script obj
userapp.use(exp.json())
userapp.post("/create-user",expressAsyncHandler(async(request,response)=>{
  
    // get userCollection
    const userCollection=request.app.get("userCollection")
    //    get user from req
    const newuser=request.body;
    // save or insert or create a newuser in userCollection
    await userCollection.insertOne(newuser)
    response.status(201).send({message:"user has been created"})
  
  
  }))

userapp.put("/update-user",expressAsyncHandler(async(request,response)=>{
 
    // get userCollection
    const userCollection=request.app.get("userCollection")
    let modifieduser=request.body;
   await userCollection.updateOne({id:modifieduser.id},{$set:{...modifieduser}})
   
      response.status(200).send({message:"user has been modified successfully"})
    
  }))
userapp.delete("/delete-user/:id",expressAsyncHandler(async(request,response)=>{
   
    // get userCollection
   const userCollection=request.app.get("userCollection")
     await userCollection.deleteOne({id:(+request.params.id)})
    
      response.status(200).send({message:"user has been deleted successfully"})
   
    
  }))


userapp.use(exp.json())
userapp.post("/register-user",expressAsyncHandler(async(request,response)=>{
      const userCollection=request.app.get("userCollection")
      
      const newUser=request.body

      const userOfDB=await userCollection.findOne({username:newUser.username})
         if(userOfDB!==null){
          response.status(200).send({message:"user already exists"})
         }
         else{
          let hashedPassword= await bcryptjs.hash(newUser.password,6)
          newUser.password=hashedPassword;
          await userCollection.insertOne(newUser)
          response.status(201).send({message:"user created"})
      
      
      }
         
      
  }))


  userapp.use(exp.json())
userapp.post('/user-login',expressAsyncHandler(async(request,response)=>{

  //get userCollectionObj
  const userCollection=request.app.get("userCollection")

  //get user credentials from req
  const userCredObj=request.body;

  //verify username
  let userOfDB=await userCollection.findOne({username:userCredObj.username})

  //if username is invalid
  if(userOfDB===null){
   response.status(200).send({message:"Invalid username"})
  }
  //if username is valid
  else{
   //verify password
   let isEqual=await bcryptjs.compare(userCredObj.password,userOfDB.password)
   //if passwords not matched
   if(isEqual===false){
     response.status(200).send({message:"Invalid password"})
   }
   //if passwords matched
   else{
     //create a JWT token
       let jwtToken=jwt.sign({username:userOfDB.username},'abcdef',{expiresIn:20})
     //send token in response
     response.status(200).send({message:"success",token:jwtToken,user:userOfDB})
   }
  }
 
}))

module.exports=userapp
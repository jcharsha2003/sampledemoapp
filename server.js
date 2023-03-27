






const { response } = require("express")
const exp=require("express")
const app=exp()
app.listen(5000,()=>{console.log("server is listening in port 3500")})
// connecting backend and frontend by server
const path=require("path")
app.use(exp.static(path.join(__dirname,"./build")));

const mclient=require("mongodb").MongoClient;
// connect to mongodb server
mclient.connect("mongodb://127.0.0.1:27017")
.then(dbRef=>{
    // get database obj
    let dbObj=dbRef.db("productsdb");
    let productCollection=dbObj.collection("productcollection")
    // access user database
    let usersdbObj=dbRef.db("usersdb")
    let userCollection=usersdbObj.collection("usercollection")
    console.log("connected to DB successfully")
    // share collections objects to APIs
    app.set("productCollection",productCollection)
     // share collections objects to APIs
     app.set("userCollection",userCollection)
})
.catch(err=>console.log("database connection err is",err))


const userapp=require("./APIs/userApi")
const productapp=require("./APIs/productApi")


app.use("/user-api",userapp)
app.use("/product-api",productapp)
// create a middleware to handle invalid path
const invalidPathHandlingMiddleware=(request,response,next)=>{
    response.send({message:"Invalid path"})
}
app.use(invalidPathHandlingMiddleware)


// create err handling middleware
const errHandler=(error,request,response,next)=>{
    response.send({"error-message":error.message})
}
app.use(errHandler)

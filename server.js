






const { response } = require("express")
const exp=require("express")
const app=exp()
app.listen(5000,()=>{console.log("server is listening in port 5000")})
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

    let accomodationObj=dbRef.db("accomodationsdb")
    let accomodationCollection=accomodationObj.collection("accomodationcollection")


    let jobObj=dbRef.db("jobsdb")
    let jobCollection=jobObj.collection("jobcollection")
    let workCollection=jobObj.collection("workcollection")


    let healthObj=dbRef.db("healthsdb")
    let healthCollection=healthObj.collection("healthcollection")
    console.log("connected to DB successfully")
    // share collections objects to APIs
    app.set("productCollection",productCollection)
     // share collections objects to APIs
     app.set("userCollection",userCollection)
     app.set("accomodationCollection",accomodationCollection)

     app.set("jobCollection",jobCollection)
     app.set("workCollection",workCollection)
     app.set("healthCollection",healthCollection)

})
.catch(err=>console.log("database connection err is",err))


const userapp=require("./APIs/userApi")
const productapp=require("./APIs/productApi")
const accomodationapp=require("./APIs/accomodationApi")
const jobapp=require("./APIs/jobApi")
const workapp=require("./APIs/workApi")
const healthapp=require("./APIs/healthApi")


app.use("/user-api",userapp)
app.use("/product-api",productapp)
app.use("/accomodation-api",accomodationapp)

app.use("/job-api",jobapp)
app.use("/work-api",workapp)
app.use("/health-api",healthapp)


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

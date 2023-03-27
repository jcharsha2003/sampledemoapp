const cloudinary=require("cloudinary").v2;
const multer=require("multer");
const {CloudinaryStorage}=require("multer-storage-cloudinary");

//configure cloudinary
cloudinary.config({
    cloud_name:"xxxxx",
    api_key:"xxxxx",
    api_secret:"xxxxxxxx"
})

//configure cloudinary storage
let clStorage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"vnr2023",
        public_id:(request,file)=>file.fieldname+"-"+Date.now()
    }

})

//configure multer
let multerObj=multer({storage:clStorage})

//export multerObj
module.exports=multerObj;

const mongoose=require('mongoose')
const shortId=require('shortid')
const userSchema= new mongoose.Schema({
full :{
type:String,
required:true
},
short :{
type:String,
required:true,
default:shortId.generate
},

})
const Register =new mongoose.model('collectionname',userSchema);
module.exports=Register;

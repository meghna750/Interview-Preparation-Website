const mongoose =require('mongoose');
const {isEmail}=require('validator');
const Schema = mongoose.Schema;

const userschema= new Schema({
email: {
    type:String,
    required:[true,'Please enter an email id'],
    unique:[true,'email already used'],
    lowercase:true,
    validate: [isEmail, 'Please Enter a valid email Id']
},
password: {
    type:String,
    required:[true,'Please enter a password id'],
    minlength:[6,'min length should be 6']
},
})

  userschema.pre('save',async function(next){
      const salt =await bcrypt.genSalt();
      this.password=await bcrypt.hash(this.password,salt);
      next();
  });

 const User=mongoose.model('user',userschema);
 module.exports=User;


import mongoose , {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from  "bcrypt";
const userSchema  = new Schema ({

    username : {
        type:String,
        required  : true,
        unique :true,
        lowercase  :true,
        trim : true,
        index : true
    },
    email : {
        type:String,
        required  : true,
        unique :true,
        lowercase  :true,
        trim : true,
    },
   
    avatar:{
        type : String ,//cloudnary url
        required : true
    },
   
   
    password : {
        type: String,
        required : [true, "password is required"]  //standard practice of encryption
    },
    refreshToken:{
        type: String
    }

},{timestamps:true})



userSchema.pre("save" , async function (next) {
   //if not modified
    if ( ! this.isModified ("password")) return next();
    
    //if modified
    this.password = await bcrypt.hash(this.password ,10)
    next( )

}    )

//dont use arrow function beacause we have to pass conetext of user

//encryption is complex and time consuming process so async await
// and middleware  flag access called next  to pass  control to the next middle ware or route handler

//whenever password is save  take password field and encrypt


userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password , this.password)
}


userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id: this._id,
        emial: this.email,
        usernmae : this.username,
        fullname: this.fullname
     },
     process.env.ACCESS_TOKEN_SECRET,
     {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
     }

     )
}

userSchema.methods.generateRefreshToken = function(){

    return jwt.sign({
        _id: this._id,
      
     },
     process.env.REFRESH_TOKEN_SECRET,
     {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
     }

)}
export const User = mongoose.model("User" , userSchema)
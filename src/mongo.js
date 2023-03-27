const mongoose=require("mongoose")
mongoose.set('strictQuery', false)

mongoose.connect("mongodb+srv://shahidpacmahn:jQfUwHb8BzMs8qCA@login.cmqvwzu.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection
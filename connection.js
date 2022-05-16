const mongoose=require("mongoose");

const MONGODB_URL='mongodb+srv://root:root@cluster0.q3gvk.mongodb.net/products_service?retryWrites=true&w=majority';

const connectDB =async () =>{
    await mongoose.connect(MONGODB_URL,{
        useCreateIndex:true,
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useFindAndModify:false
    });
    console.log('Mongo Connection Successfully Run !!');
}
module.exports=connectDB;


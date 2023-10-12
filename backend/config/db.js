const mongoose=require('mongoose');
const mongoURL='mongodb://127.0.0.1:27017/Real-Time-Chat-App';
//connect
const ConnectDB=async()=>{
    try{
        const conn= await mongoose.connect(mongoURL,{UseNewUrlParser:true,
            useUnifiedTopology:true,
          
    });
         console.log(`MongoDB Connected :${conn.connection.host}`.cyan.underline);
    }catch(e){
        console.log(`Error:${e.message}`.red.bold);
        process.exit(1);
    }
}
module.exports=ConnectDB;
const express=require('express');
const cors=require('cors');
const chats=require('./data/data.js');
const ConnectDB = require('./config/db.js');
const dotenv = require("dotenv");
const colors=require("colors")
const userRoutes=require('./routes/userRoutes')
const chatRoutes=require('./routes/chatRoutes')
const messageRoutes=require('./routes/messageRoutes')
const {notFound,errorHandler}=require('./middlewares/errorMiddleware.js')
dotenv.config();
ConnectDB();
const app=express();
app.use(express.json());




app.use(cors());
app.use(express.json());

app.get("/",(req, res) => {
    res.send("API is Running")
})

app.use('/api/user',userRoutes);
app.use('/api/chat',chatRoutes);
app.use('/api/message',messageRoutes);

app.use(notFound)
app.use(errorHandler)


const PORT=process.env.PORT || 12000;
const server=app.listen(PORT,()=>{
    console.log(`Server Started on PORT ${PORT}`.yellow.bold);
})
const express=require('express');
const cors=require('cors');
const chats=require('./data/data.js')


const app=express();
require("dotenv").config;

app.use(cors());
app.use(express.json());

// app.get("/",(req, res) => {
//     res.send("API is Running")
// })

app.get("/api/chat", (req, res) => {
    res.send(chats);
})


const PORT=process.env.PORT || 12000;
const server=app.listen(PORT,()=>{
    console.log(`Server Started on PORT ${PORT}`);
})
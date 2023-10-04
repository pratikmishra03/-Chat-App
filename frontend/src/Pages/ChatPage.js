import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ChatPage = () => {
  const [chats,setChats]=useState([])
    const fetchChats = async () => {
      try{

        const response = await axios.get("http://localhost:12000/api/chat");
        setChats(response.data);
      }catch(err){
        console.log("Error fetching chats:',err")
      }
    };
    
    useEffect(() => {
        fetchChats()
    }, [])
    
  return (
    <div>{chats.map((chat) => <div>{chat.chatName}</div>)}</div>

  )
}

export default ChatPage
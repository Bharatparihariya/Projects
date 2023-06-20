import { Avatar } from '@mui/material'
import React,{ useEffect,useState} from 'react'
import "./Css/Sidebar.css"

function SlidebarChat({addnewchat}) {

   const [seed, setSeed] = useState("");

   useEffect(() => {
     setSeed(Math.floor(Math.random() * 5000))
   },[])
  return (
    !addnewchat ? (
      <div className='sidebar_chat'>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}/.svg`}/>
      <div className='sidebar_chatInfo'>
      <h2>React Tutorial</h2>
      <p>Last Message...</p>
      </div> 
    </div>
    ) :(
    <div className='sidebar_chat'>
      <h2>Add New Chat</h2>

    </div>
    ) 
  )
}

export default SlidebarChat 

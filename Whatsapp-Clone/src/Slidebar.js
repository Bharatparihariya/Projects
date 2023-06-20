import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import "./Css/Sidebar.css"
import  SlidebarChat from './SlidebarChat'
import { useEffect } from 'react';
import db from './firebase'



function Slidebar() {
   const [rooms,setRooms] = useState([]);
  useEffect (()=> {
    db.collection('rooms').onSnapshot(snapshot=>{
      setRooms(snapshot.docs.map(doc=> ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[]);
console.log(rooms);
 
  return (
    <div className='sidebar'>

   <div className='sidebar_header'>
    <Avatar/>
    
    <div className='sidebar_headerRight'>
     <IconButton>
        <DonutLargeIcon/>
     </IconButton>

     <IconButton>
        <ChatIcon/>
     </IconButton>

     <IconButton>
        <MoreVertIcon/>
     </IconButton>
    </div>
    </div>
    <div className='sidebar_search'>
        <div className='sidebar_searchContainer'>
          <SearchIcon/>
          <input type='text' placeholder='Search or Start a new Chat'/>
        </div>
        </div>   
        <div className='sidebar_Chats'>
         <SlidebarChat addnewchat/>

         <SlidebarChat/>

         <SlidebarChat/>

         <SlidebarChat/>

         <SlidebarChat/>
        </div>
    </div>
  )
}

export default Slidebar

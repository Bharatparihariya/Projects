import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
import { Avatar, IconButton } from '@mui/material'
import './Css/chat.css'
function Chat() {
  return (
    <div className='chat'>
        <div className='chat_header'>
            <Avatar/>
           <div className='chat_headerInfo'>
           <h3>Spu College</h3>
            <p>Last Seen..</p>
           </div>

       

        <div className='header_right'>
            <IconButton>
                <SearchIcon/>
            </IconButton>

            <IconButton>
               <AttachFileIcon/>
            </IconButton>

            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </div>
    </div>

<div className='chat_body'>
    <p className='chat_message chat_reciever'>
        <span className='chat_name'>Hritik Vyas</span>
        Hello How are you Bharat ?
        <span className='chat_time'>12:40 PM</span>
    </p>

    <p className='chat_message chat_reciever'>
        <span className='chat_name'>Hritik Vyas</span>
        Hello How are you Bharat ?
        <span className='chat_time'>12:40 PM</span>
    </p>

    <p className='chat_message chat_reciever'>
        <span className='chat_name'>Hritik Vyas</span>
        Hello How are you Bharat ?
        <span className='chat_time'>12:40 PM</span>
    </p>

    <p className='chat_message '>
        <span className='chat_name'>Hritik Vyas</span>
        Hello How are you Bharat ?
        <span className='chat_time'>12:40 PM</span>
    </p>
</div>
          <div className='chat_footer'>
                <IconButton>
                <EmojiEmotionsIcon/>
                </IconButton>
                <IconButton>
                <AttachFileIcon/>
                </IconButton>
                
                <form>
                    <input type='text' placeholder='Type your message' />
                    <input type='submit'/>
                </form>
                <IconButton>
                <MicIcon/>
                    </IconButton> 
          </div>
    </div>
  )
}

export default Chat

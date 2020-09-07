import React from "react";
import Chat from './Chat';

function Chats()
{
    return ( 
    <div className="chats">
        <Chat 
            name="Jennifer"
            message="Hey  !!!"
            timestamp="1 min ago"
            profilePic="j-l.jpg"
        />
        <Chat 
            name="Mark"
            message="Hey!!!"
            timestamp="5 min ago"
            profilePic=""
        />
        <Chat 
            name="Jenny"
            message="Hi, Whats up!!!"
            timestamp="10 min ago"
            profilePic="11.jpg"
        />
        <Chat 
            name="Shreya"
            message="Hey Twister!!!"
            timestamp="1 hr ago"
            profilePic="g-1.jpg"
        />
    </div>
    );
}

export default Chats;
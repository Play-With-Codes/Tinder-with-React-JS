import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Jennifer',
            image: 'j-l.jpg',
            message: 'Hey !!!'
        },
        {
            name: 'Jennifer',
            image: 'j-l.jpg',
            message: 'How re you'
        },
        {
            message: 'Hello Jen !!!'
        },
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput('');
    };

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH JENNIFER ON 10/08/2020.</p>
            {messages.map(message => (
                message.name ?(
                    <div className="chatScreen__message">
                        <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
                
            ))}

            <div>
                <form className="chatScreen__input">
                    <input value={input} 
                    onChange= {(e) => setInput(e.target.value)}
                    className="chatScreen__inputField" type="text" placeholder="Type a message..." required />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
            </div>

        </div>
    );
}



export default ChatScreen;
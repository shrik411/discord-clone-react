import React, { useEffect, useState } from 'react'
import { ChatHeader } from '../ChatHeader/ChatHeader'
import './Chat.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { Message } from '../Message';
import { selectedChannelId, selectedChannelName } from '../features/appSlice';
import { useSelector } from 'react-redux';
import db from '../firebase';
import { selectUser } from '../features/userSlice';
import firebase from 'firebase';

const Chat = () => {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectedChannelId);
    const channelName = useSelector(selectedChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {

        if (channelId) {
            db.collection("channels")
            .doc(channelId)
            .collection('messages')
            .onSnapshot((snapshot) => 
                setMessages(snapshot.docs.map((doc) => doc.data()))
            );
        }
    }, [channelId])

    useEffect(() => {
        setInput("");
    }, [channelId]);

    const sendMessage = (e) => {
        e.preventDefault();

        if (input) {
            db.collection("channels").doc(channelId).collection('messages').add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                user: user
            });

            setInput("");
        }

    }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                {messages.map(({user, message, timestamp}) => (
                    <Message key={timestamp} user={user} message={message} timestamp={timestamp}/>
                ))}
            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input
                        value={input}
                        disabled={!channelId}
                        onChange={e => setInput(e.target.value)}
                        placeholder={`Message from ${channelName}`}
                    />
                    <button 
                        disabled={!channelId} 
                        className="chat__inputButton" 
                        type="submit"
                        onClick={sendMessage}
                    >
                        Send Message
                    </button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />

                </div>
            </div>
        </div>
    )
}

export { Chat }

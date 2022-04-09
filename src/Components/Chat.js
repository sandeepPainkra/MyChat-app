import React, { useEffect, useState } from "react";
import HelpIcon from "@material-ui/icons/Help";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { EmojiEmotions, Mic } from "@material-ui/icons";

import Message from "./Message.js";
import { selectRoomID } from "../features/appSlice.js";
import { useSelector } from "react-redux";
import db from "./firebase.js";
import { selectUser } from "../features/userSlice.js";
import FlipMove from "react-flip-move";

const Chat = () => {
  const [roomName, setRoomName] = useState([]);
  const [input, setInput] = useState("");
  const roomID = useSelector(selectRoomID);
  const [messages, setMessages] = useState([]);
  const user = useSelector(selectUser);

  const SendMessages = (e) => {
    e.preventDefault();

    db.collection("rooms").doc(roomID).collection("messages").add({
      text: input,
      username: user.displayName,
      email: user.email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  useEffect(() => {
    if (roomID) {
      db.collection("rooms")
        .doc(roomID)
        .onSnapshot((snapshot) => {
          setRoomName(snapshot.data());
        });
    }
  }, [roomID]);

  // for fetching data from database

  useEffect(() => {
    if (roomID) {
      db.collection("rooms")
        .doc(roomID)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [roomID]);

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_headerLeft">
          <span>#</span>
          <div className="chat_headerInfo">
            <h2>{roomName.roomName ? roomName.roomName : "XYZ"}</h2>
            <p>{new Date(messages[0]?.timestamp?.toDate()).toUTCString()}</p>
          </div>
        </div>
        <div className="chat_headerRight">
          <HelpIcon />
        </div>
      </div>

      {/* Chat body starts here */}

      <div className="chat_body">
        <FlipMove staggerDurationBy={30} duration={750} delay={30}>
          {messages.map((data, index) => {
            return (
              <Message
                key={index}
                message={data.text}
                username={data.username}
                timestamp={data.timestamp}
                email={data.email}
              />
            );
          })}
        </FlipMove>
      </div>

      {/* Chat Bottom section starts here */}

      <div className="chat_footer">
        <EmojiEmotions />
        <form>
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Send messages"
          />
          <button onClick={SendMessages} type="submit">
            click
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
};

export default Chat;

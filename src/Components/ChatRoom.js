import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRoomID, setRoomID } from "../features/appSlice";
import db from "./firebase";

const ChatRoom = ({ roomName, roomId }) => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const SetRoomId = () => {
    if (roomId) {
      dispatch(
        setRoomID({
          roomId: roomId,
        })
      );
    }
  };
  return (
    <div onClick={SetRoomId} className="chatRoom breadcrumb">
      <span>#</span>
      <div className="chatRoom_info">
        <h3>{roomName}</h3>
        <h4>{messages[0]?.text}</h4>
      </div>
      <p>{new Date(messages[0]?.timestamp?.toDate()).toUTCString()}</p>
    </div>
  );
};

export default ChatRoom;

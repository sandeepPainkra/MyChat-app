import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import InfoIcon from "@material-ui/icons/Info";
import React, { useEffect, useState } from "react";
import ChatRoom from "./ChatRoom.js";
import db from "./firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, selectUser } from "../features/userSlice.js";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    db.collection("rooms")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setRooms(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  const AddnewChat = () => {
    const roomName = prompt("Enter Room Name:");
    console.log(roomName);
    if (roomName) {
      db.collection("rooms").add({
        roomName: roomName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };

  const signOUT = () => {
    dispatch(LogOut());
    navigate("/");
  };
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebarHeader_left">
          <Avatar src={user.photoURL} onClick={signOUT} />
          <h3>{user.displayName}</h3>
        </div>
        <div className="sidebarHeader_right">
          <InfoIcon />
        </div>
      </div>
      {/* sidebar search */}

      <div className="sidebar_search">
        <Search />
        <input type="text" placeholder="Search or start new chat" />
      </div>
      <hr />

      {/* add new chat section */}

      <div onClick={AddnewChat} className="add_newChat">
        <h2>Add New Chat</h2>
      </div>

      {/* Chat Room section starts here */}

      <div className="chat_rooms">
        {rooms.map((data, index) => {
          return (
            <ChatRoom
              key={index}
              roomId={data.id}
              roomName={data.data.roomName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

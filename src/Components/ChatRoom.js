import React from "react";

const ChatRoom = ({ roomName,roomId }) => {
  return (
    <div className="chatRoom breadcrumb">
      <span>#</span>
      <div className="chatRoom_info">
        <h3>{roomName}</h3>
        <h4>Last Message</h4>
      </div>
      <p>timestamp</p>
    </div>
  );
};

export default ChatRoom;

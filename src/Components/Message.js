import React,{forwardRef} from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Message =forwardRef( ({ message, timestamp, username, email },ref) => {
  const user = useSelector(selectUser);
  return (
    <div
    ref={ref}
      className={`btn btn-primary chat_message ${
        user?.email === email && "message_reciever"
      } `}
    >
      <h6>{username}</h6>
      <h2>{message}</h2>
      <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
    </div>
  );
});

export default Message;

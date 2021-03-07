import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "./firebase";
import firebase from "firebase";

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setinput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault(); //prevents refresh
    if (!channelId) return;

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      userImage:
        "https://avatars.githubusercontent.com/u/36282653?s=460&u=0c740afe13d64bc087991ecc513e72ca2ff213c2&v=4",
    });
    setinput("");
    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          type="text"
          placeholder={`Message #${channelName}`}
          onChange={(e) => setinput(e.target.value)}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;

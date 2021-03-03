import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function Chat() {
  return (
    <ChatContainer>
      <h1>Hello</h1>
      <Header>
        <HeaderLeft>
           <h4><strong>#Room name</strong></h4>
        <StarBorderOutlined />
        </HeaderLeft>
        <HeaderRight>
           <p><InfoOutlined /> Details</p>
        </HeaderRight>
      </Header>
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const Header = styled.div``;

const HeaderRight = styled.div``;
const HeaderLeft = styled.div``;
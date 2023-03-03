import React from 'react';
import styled from 'styled-components';
import { IMessage } from '../interfaces/IMessage'
import { theme } from "../styles/index"
interface MessageWrapperProps {
  messages: IMessage[];
}

const MessageWrapper: React.FC<MessageWrapperProps> = ({ messages }) => {
  return (
    <Wrapper>
      {messages.slice().reverse().map((message, index) => {
        const isUserMessage = message.isUserMessage;

        return (
          <Message key={index} isUserMessage={isUserMessage}>
            {message.text}
          </Message>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
`;

interface MessageProps {
  isUserMessage: boolean;
}

const Message = styled.div<MessageProps>`
  max-width: 60%;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  color: black;
  background-color: ${(props) => (props.isUserMessage ? theme.comment : theme.foreground)};
  align-self: ${(props) => (props.isUserMessage ? 'flex-end' : 'flex-start')};
`;

export default MessageWrapper;

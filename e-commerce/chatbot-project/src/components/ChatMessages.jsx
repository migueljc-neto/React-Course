import { useEffect, useRef } from "react";
import { ChatMessage } from "../components/ChatMessage";

import "./ChatMessages.css";

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((element, index) => {
        return (
          <ChatMessage
            message={element.message}
            sender={element.sender}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;

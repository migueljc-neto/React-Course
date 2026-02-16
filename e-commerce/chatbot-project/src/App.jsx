import { useState, useEffect, useRef } from "react";
import { Chatbot } from "supersimpledev";
import "./App.css";

function ChatMessage({ message, sender }) {
  return (
    <div className={sender === "bot" ? "bot-message" : "user-message"}>
      {sender === "bot" && (
        <img
          src="./src/chatbot/images/botPfp.png"
          className="chat-message-profile"
        />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img
          src="./src/chatbot/images/userPfp.png"
          className="chat-message-profile"
        />
      )}
    </div>
  );
}

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

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function keyLog(e) {
    if (e.key == "Enter") {
      sendMessage();
    }
  }

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      { message: inputText, sender: "user" },
    ];

    setChatMessages(newChatMessages);
    const response = Chatbot.getResponse(inputText);

    setChatMessages([...newChatMessages, { message: response, sender: "bot" }]);

    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to the chatbot"
        size="30"
        type={showPassword ? "text" : "password"}
        onChange={saveInputText}
        onKeyDown={keyLog}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
      <button className="send-button" onClick={toggleShowPassword}>
        show password
      </button>
    </div>
  );
}

function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: "hello chatbot", sender: "user" },
    { message: "hello, how can i help you?", sender: "bot" },
    { message: "can you get todays date?", sender: "user" },
    { message: "yes, today is 3rd of February!?", sender: "bot" },
  ]);
  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;

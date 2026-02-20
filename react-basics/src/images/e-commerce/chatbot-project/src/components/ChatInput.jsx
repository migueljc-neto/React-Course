import { useState } from "react";
import { Chatbot } from "supersimpledev";

import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
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

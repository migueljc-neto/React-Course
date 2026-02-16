import { useState } from "react";

import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

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

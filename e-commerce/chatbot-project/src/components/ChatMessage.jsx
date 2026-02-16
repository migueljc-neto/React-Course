import RobotPfp from "../assets/images/botPfp.png";
import UserPfp from "../assets/images/userPfp.png";

import "./ChatMessage.css";

export function ChatMessage({ message, sender }) {
  return (
    <div className={sender === "bot" ? "bot-message" : "user-message"}>
      {sender === "bot" && (
        <img src={RobotPfp} className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={UserPfp} className="chat-message-profile" />
      )}
    </div>
  );
}

import "./App.css";
import React from "react";
import Chatbot from "react-chatbot-kit";
import chatbotConfig from "./chatbot/chatbotConfig";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import ChatBotRoutes from "./ChatBotRoutes";

function App() {
  return (
    <div className="App">
      <div className="chatbot-box">
        <h1 id="chatbot-title">Benjamin</h1>
        {/* <button type="button" className="btn cancel" onclick="window.open('', '_self', ''); window.close();">Close</button>
        <button type="button" className="btn cancel" onclick="closeForm()">Close1</button> */}
        <Chatbot
          config={chatbotConfig}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          ChatBotRoutes={ChatBotRoutes}
        />
      </div>
    </div>
  );
}

export default App;

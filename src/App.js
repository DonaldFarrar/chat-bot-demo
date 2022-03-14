import "./App.css";
import React from "react";
import Chatbot from "react-chatbot-kit";
import chatbotConfig from "./chatbot/chatbotConfig";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import ChatBotRoutes from "./ChatBotRoutes";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function App() {
  return (
    <div className="App">
      <div className="chatbot-box">
        <h1 id="chatbot-title">Benjamin</h1>
        {/* <button type="button" className="btn cancel" onclick="window.open('', '_self', ''); window.close();">Close</button>
        <button type="button" className="btn cancel" onclick="closeForm()">Close1</button> */}
        <div className="react-chatbot-kit-chat-header">
          <h1>Benjamin</h1>
        </div>
        <Popup trigger={<button> Trigger</button>} position="center">
          <div>
            <Chatbot
              config={chatbotConfig}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
              ChatBotRoutes={ChatBotRoutes}
            />
          </div>
        </Popup>
      </div>
    </div>
  );
}

export default App;

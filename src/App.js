import "./App.css";
import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

function App() {
  return (
    <div className="App">
      <div className="chatbot-box" style={{ maxWidth: "250px" }}>
        <h1>ChatBot</h1>
        {/* <button type="button" className="btn cancel" onclick="window.open('', '_self', ''); window.close();">Close</button>
        <button type="button" className="btn cancel" onclick="closeForm()">Close1</button> */}
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
}

export default App;

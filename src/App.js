import "antd/dist/antd.css";
import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

import SignIn from "./components/SignIn";
import Chats from "./components/Chats";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

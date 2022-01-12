import "antd/dist/antd.css";
import './App.css';

import React from "react";
import { Routes, Route } from "react-router-dom";

import SignIn from './components/SignIn';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
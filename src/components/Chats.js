import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../config/firebase";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const spinner = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Chats = () => {
  const { user } = useAuth();

  const signOut = () => {
    auth.signOut();
  };

  if (!user) return <Spin indicator={spinner} />;

  return (
    <div>
      <p>Chats!</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Chats;

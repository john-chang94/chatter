import React from "react";
import { Typography } from "antd";
import { auth } from "../config/firebase";

const Navbar = () => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="navbar">
      <Typography.Title level={2}>Chatter</Typography.Title>
      <Typography.Text onClick={signOut}>Sign Out</Typography.Text>
    </div>
  );
};

export default Navbar;

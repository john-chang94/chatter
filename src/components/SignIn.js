import React from "react";
import { Typography, Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { useAuth } from "../contexts/AuthContext";

const SignIn = () => {
  const { useGoogle } = useAuth();

  return (
    <div className="signin-bg">
      <div className="signin-card">
        <Typography.Title level={2}>Welcome to Chatter!</Typography.Title>
        <Button type="primary" className="signin-btn" onClick={useGoogle}>
          <GoogleOutlined /> Sign In with Google
        </Button>
      </div>
    </div>
  );
};

export default SignIn;

import React from "react";
import { Typography, Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

const SignIn = () => {
  return (
    <div className="signin-bg">
      <div className="signin-card">
        <Typography.Title level={2}>Welcome to Chatter!</Typography.Title>
        <Button type="default" className="signin-btn">
          <GoogleOutlined /> Sign In with Google
        </Button>
      </div>
    </div>
  );
};

export default SignIn;

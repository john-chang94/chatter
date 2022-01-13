import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";
import axios from "axios";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { ChatEngine } from "react-chat-engine";
import Navbar from "./Navbar";

const spinner = <LoadingOutlined style={{ fontSize: 40 }} spin />;

const Chats = () => {
  const { user } = useAuth();
  const { navigate } = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const getImage = async (url) => {
    const res = await fetch(url);
    const data = await res.blob();

    return new File([data], "userImage.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    // Check if a user is signed in
    if (!user) {
      navigate("/");
      return;
    }

    // Check if chat user exists
    axios
      .get(`https://api.chatengine.io/users/me`, {
        headers: {
          "project-id": process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        // If no user is found, create a new user
        const formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email);
        formData.append("secret", user.uid);

        // Get profile pic from retrieved user object for avatar
        getImage(user.photoURL).then((avatar) => {
          formData.append("avatar", avatar, avatar.name);

          axios
            .post(`https://api.chatengine.io/users/`, formData, {
              headers: {
                "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY,
              },
            })
            .then(() => setIsLoading(false))
            .catch((err) => console.log(err));
        });
      });
  }, [user, navigate]);

  if (!user || isLoading)
    return (
      <div style={{ marginTop: "25vh", textAlign: "center" }}>
        <Spin indicator={spinner} style={{ marginBottom: 10 }} />
        <Typography.Title level={3}>Loading...</Typography.Title>
      </div>
    );

  return (
    <div className="chats-page">
      <Navbar />
      <ChatEngine
        projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        userName={user.email}
        userSecret={user.uid}
        height={`${window.innerHeight - 66}px`} // Deduct 66px from navbar
      />
    </div>
  );
};

export default Chats;

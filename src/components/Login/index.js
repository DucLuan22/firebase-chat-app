import React from "react";
import { Row, Col, Button, Typography } from "antd";
import firebase, { auth } from "../../firebase/config";
import { addDocument, generateKeywords } from "../../firebase/services";
import styled from "styled-components";
import { GoogleCircleFilled, FacebookFilled } from "@ant-design/icons";
const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  };

  const LoginForm = styled.div`
    padding: 2rem;
    .ant-typography {
      font-weight: bold;
      color: white;
    }
    button {
      margin: 0.6rem auto;
      padding: -1rem;
    }
  `;
  const LoginFormContainer = styled.div`
    margin: 40% 0;
    border: 1px solid black;
    border-radius: 0.6rem;
    background: #2b2b2b;
  `;
  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <LoginFormContainer>
            <LoginForm>
              <Title style={{ textAlign: "center" }} level={3}>
                MeChat
              </Title>
              <Button
                style={{ width: "100%", marginBottom: 5 }}
                onClick={() => handleLogin(googleProvider)}
                icon={<GoogleCircleFilled />}
              >
                Login Using Google
              </Button>
              <Button
                style={{ width: "100%" }}
                onClick={() => handleLogin(fbProvider)}
                icon={<FacebookFilled />}
              >
                Login Using Facebook
              </Button>
            </LoginForm>
          </LoginFormContainer>
        </Col>
      </Row>
    </div>
  );
}

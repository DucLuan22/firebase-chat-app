import React from "react";
import { Button, Avatar, Typography } from "antd";
import styled from "styled-components";

import { auth } from "../../firebase/config";
import { AuthContext } from "../../Context/AuthProvider";
import { AppContext } from "../../Context/AppProvider";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0.8rem 1rem;
  border-bottem: 1px solid;
  align-items: center;
  padding-bottom: 2rem;
  .Username {
    color: white;
    margin-left: 10px;
  }
  .logout-btn {
    border-radius: 1rem;
  }
`;

export default function UserInfo() {
  const {
    user: { displayName, photoURL },
  } = React.useContext(AuthContext);
  const { clearState } = React.useContext(AppContext);

  return (
    <Wrapper>
      <div>
        <Avatar src={photoURL}>
          {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className="Username">{displayName}</Typography.Text>
      </div>
      <Button
        ghost
        onClick={() => {
          clearState();
          auth.signOut();
        }}
      >
        Logout
      </Button>
    </Wrapper>
  );
}

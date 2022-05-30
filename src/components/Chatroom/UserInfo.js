import React, { useEffect } from "react";
import { Button, Avatar, Typography } from "antd";
import styled from "styled-components";
import { auth, db } from "../../firebase/config";
import { AuthContext } from "../../Context/AuthProvider";
const Wrap = styled.div`
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

function UserInfo() {
  //   useEffect(() => {
  //     db.collection("users").onSnapshot((snapshopt) => {
  //       const data = snapshopt.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));
  //       console.log({ data, snapshopt, docs: snapshopt.docs });
  //     });
  //   }, []);
  const {
    user: { displayName, photoURL },
  } = React.useContext(AuthContext);
  return (
    <Wrap>
      <div>
        <Avatar src={photoURL}>
          {photoURL != null ? "" : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className="Username">{displayName}</Typography.Text>
      </div>
      <Button className="logout-btn" onClick={() => auth.signOut()}>
        Logout
      </Button>
    </Wrap>
  );
}

export default UserInfo;

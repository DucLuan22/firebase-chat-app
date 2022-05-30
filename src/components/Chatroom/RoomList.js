import React, { useMemo } from "react";
import styled from "styled-components";
import { Collapse, Typography, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import useFireStore from "../../Hooks/useFireStore";
import { AuthContext } from "../../Context/AuthProvider";
const { Panel } = Collapse;
const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
      background: #171717;
    }
    .ant-collapse-content-bos {
      padding: 0, 40px;
    }
    .ant-collapse-content-bos,
    button {
      background: white;
      color: black;
    }
    overflow: auto;
  }
`;
const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

function RoomList() {
  const {
    user: { uid },
  } = React.useContext(AuthContext);

  const roomsCondition = useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);
  const rooms = useFireStore("rooms", roomsCondition);
  console.log(rooms);
  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="Rooms List" className="panel" key={"1"}>
        {rooms.map((room) => (
          <LinkStyled key={room.id} style={{ color: "white" }}>
            {room.name}
          </LinkStyled>
        ))}
        <Button
          style={{
            backgroundColor: "transparent",
            color: "white",
            paddingTop: "25px",
          }}
          type="text"
          icon={<PlusCircleOutlined />}
          className="add-room"
        >
          Add-Room
        </Button>
      </PanelStyled>
    </Collapse>
  );
}

export default RoomList;

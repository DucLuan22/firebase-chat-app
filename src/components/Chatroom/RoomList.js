import React from "react";
import { Collapse, Typography, Button } from "antd";
import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";
import { AppContext } from "../../Context/AppProvider";

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

export default function RoomList() {
  const { rooms, setIsAddRoomVisible, setSelectedRoomId } =
    React.useContext(AppContext);

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };

  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="List of Rooms" key="1">
        {rooms.map((room) => (
          <LinkStyled
            style={{ color: "white" }}
            key={room.id}
            onClick={() => setSelectedRoomId(room.id)}
          >
            {room.name}
          </LinkStyled>
        ))}
        <Button
          type="text"
          icon={<PlusCircleOutlined />}
          className="add-room"
          onClick={handleAddRoom}
        >
          Add Room
        </Button>
      </PanelStyled>
    </Collapse>
  );
}

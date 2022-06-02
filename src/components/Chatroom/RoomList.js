import React from "react";
import { Collapse, Typography, Button } from "antd";
import styled from "styled-components";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { AppContext } from "../../Context/AppProvider";
import { deleteDocument } from "../../firebase/services";
const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
      background: #171717;
      text-align: center;
    }
    .ant-collapse-content-box,
    button {
      background: #171717;
      color: white;
    }
    .ant-collapse-content-box {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: end;
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
    rooms,
    setIsAddRoomVisible,
    setSelectedRoomId,
    setSelectedDeleteRoom,
    setIsDeleteRoomVisible,
  } = React.useContext(AppContext);

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };

  function deleteRoom(id) {
    deleteDocument("rooms", id);
    return;
  }

  const handleModelDelete = (id) => {
    setSelectedDeleteRoom(id);
    setIsDeleteRoomVisible(true);
  };
  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="List of Rooms" key="1">
        <Button
          type="text"
          icon={<PlusCircleOutlined />}
          className="add-room"
          onClick={handleAddRoom}
        >
          Add Room
        </Button>
        {rooms.map((room) => (
          <LinkStyled
            style={{ color: "white" }}
            key={room.id}
            onClick={() => setSelectedRoomId(room.id)}
          >
            {room.name}
            <DeleteOutlined
              style={{ paddingLeft: "2rem" }}
              onClick={() => handleModelDelete(room.id)}
            />
          </LinkStyled>
        ))}
      </PanelStyled>
    </Collapse>
  );
}
export default RoomList;

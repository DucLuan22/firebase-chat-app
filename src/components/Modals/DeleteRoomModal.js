import React, { useContext } from "react";
import { Modal, Button } from "antd";
import { AppContext } from "../../Context/AppProvider";
import { deleteDocument } from "../../firebase/services";
function DeleteRoomModal(props) {
  const { isDeleteRoomVisible, setIsDeleteRoomVisible, selectedDeleteRoom } =
    useContext(AppContext);

  const handleOk = () => {
    if (selectedDeleteRoom) {
      deleteDocument("rooms", selectedDeleteRoom);
    }
    setIsDeleteRoomVisible(false);
  };

  const handleCancel = () => {
    setIsDeleteRoomVisible(false);
  };

  return (
    <>
      <Modal
        title="Delete Room"
        visible={isDeleteRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Do you want to delete this room?</p>
      </Modal>
    </>
  );
}

export default DeleteRoomModal;

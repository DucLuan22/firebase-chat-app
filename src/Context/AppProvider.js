import React, { useState } from "react";
import useFirestore from "../Hooks/useFirestore";
import { AuthContext } from "./AuthProvider";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [isDeleteRoomVisible, setIsDeleteRoomVisible] = useState(false);
  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
  const [isInviteMemberVisible, setIsInviteMemberVisible] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const [selectedDeleteRoom, setSelectedDeleteRoom] = useState("");
  const {
    user: { uid },
  } = React.useContext(AuthContext);

  const roomsCondition = React.useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);

  const rooms = useFirestore("rooms", roomsCondition);

  const selectedRoom = React.useMemo(
    () => rooms.find((room) => room.id === selectedRoomId) || {},
    [rooms, selectedRoomId]
  );

  const usersCondition = React.useMemo(() => {
    return {
      fieldName: "uid",
      operator: "in",
      compareValue: selectedRoom.members,
    };
  }, [selectedRoom.members]);

  const members = useFirestore("users", usersCondition);

  const clearState = () => {
    setSelectedRoomId("");
    setIsAddRoomVisible(false);
    setIsInviteMemberVisible(false);
    setIsDeleteRoomVisible(false);
    setSelectedDeleteRoom("");
  };

  return (
    <AppContext.Provider
      value={{
        rooms,
        members,
        selectedRoom,
        isAddRoomVisible,
        setIsAddRoomVisible,
        selectedRoomId,
        setSelectedRoomId,
        isInviteMemberVisible,
        setIsInviteMemberVisible,
        setIsDeleteRoomVisible,
        isDeleteRoomVisible,
        clearState,
        selectedDeleteRoom,
        setSelectedDeleteRoom,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

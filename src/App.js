import "./App.css";
import Login from "./components/Login";
import Chatroom from "./components/Chatroom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/AppProvider";
import AddRoomModal from "./components/Modals/AddRoomModal";
import InviteMemberModal from "./components/Modals/InviteMemberModal";
function App() {
  return (
    <Router>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route element={<Login />} path="/login" />
            <Route element={<Chatroom />} path="/" />
          </Routes>
          <InviteMemberModal />
          <AddRoomModal />
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

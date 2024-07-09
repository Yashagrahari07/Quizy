import Home from "./pages/Home";
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}
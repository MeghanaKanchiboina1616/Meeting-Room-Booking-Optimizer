import { Routes, Route } from "react-router-dom";
import Upload from "../pages/Upload";
import Dashboard from "../pages/Dashboard";
import Rooms from "../pages/Rooms";
import Meetings from "../pages/Meetings";
import Optimizer from "../pages/Optimizer";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/meetings" element={<Meetings />} />
      <Route path="/optimizer" element={<Optimizer />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
}
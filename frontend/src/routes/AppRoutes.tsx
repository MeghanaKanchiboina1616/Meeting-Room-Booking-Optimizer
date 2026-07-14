import {
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Rooms from "../pages/Rooms";
import Meetings from "../pages/Meetings";
import Optimizer from "../pages/Optimizer";
import Upload from "../pages/Upload";


export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/rooms"
          element={<Rooms />}
        />

        <Route
          path="/meetings"
          element={<Meetings />}
        />

        <Route
          path="/optimizer"
          element={<Optimizer />}
        />

        <Route
          path="/upload"
          element={<Upload />}
        />
      </Route>
    </Routes>
  );
}
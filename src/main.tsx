import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import Profile from "./routes/Profile.tsx";
import Settings from "./routes/Settings.tsx";
import Team from "./routes/Team.tsx";
import Calendar from "./routes/Calendar.tsx";
import AddMember from "./components/AddMember/AddMemberLayout.tsx";
import Services from "./components/AddMember/Services.tsx";
import Locations from "./components/AddMember/Locations.tsx";
import Commisions from "./components/AddMember/Commisions.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "calendar", element: <Calendar /> },
      { path: "team", element: <Team /> },
      { path: "profile", element: <Profile /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  {
    path: "team/add",
    element: <AddMember />,
    children: [
      { path: "profile", element: <Profile /> },
      { path: "services", element: <Services /> },
      { path: "locations", element: <Locations /> },
      { path: "settings", element: <Settings /> },
      { path: "commisions", element: <Commisions /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

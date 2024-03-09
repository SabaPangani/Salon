import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function Root() {
  return (
    <div>
      <Navbar />
      <Sidebar />

      <div className="flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}

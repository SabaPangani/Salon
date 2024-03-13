import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function Root() {
  return (
    <div>
      <Navbar />
      <Sidebar />

      <div className="flex justify-center items-center mt-48 w-full max-w-[900px] mx-auto bg-white p-8 rounded-lg">
        <Outlet />
      </div>
    </div>
  );
}

import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export default function Root() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center w-full max-w-[900px] mx-auto p-8 rounded-lg">
        <Outlet />
      </div>
    </>
  );
}

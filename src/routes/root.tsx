import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export default function Root() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center mt-48 w-full max-w-[900px] mx-auto bg-white p-8 rounded-lg">
        <Outlet />
      </div>
    </>
  );
}

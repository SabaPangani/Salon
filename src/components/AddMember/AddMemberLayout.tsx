import { NavLink, Outlet, useNavigate } from "react-router-dom";
import CancelSvg from "../svgs/CancelSvg";

export default function AddMember() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/team");
  };
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-light-purple text-[15px] cursor-pointer rounded-md p-2"
      : "text-[15px] cursor-pointer";
  return (
    <div className="max-w-[1300px] w-full mx-auto flex flex-col gap-y-5">
      <header className="flex flex-row items-center justify-between mt-5">
        <span onClick={handleClick} className="cursor-pointer">
          <CancelSvg />
        </span>
        <button className="btn-primary">Add</button>
      </header>

      <h1 className="text-dark text-4xl font-bold mt-10 pl-16">Add team member</h1>
      <div className="flex flex-row items-start justify-between px-16">
        <div className="flex flex-col gap-y-5 border border-border bg-white rounded-xl w-[280px] py-5 px-7">
          <div className="flex flex-col gap-y-4 border-b border-border pb-2">
            <p className="font-semibold text-[17px]">Personal</p>
            <NavLink to="profile" className={getNavLinkClass}>
              <p>Profile</p>
            </NavLink>
          </div>

          <div className="flex flex-col gap-y-4 border-b border-border pb-2">
            <p className="font-semibold text-[17px]">Workspace</p>
            <NavLink to="services" className={getNavLinkClass}>
              <p>Services</p>
            </NavLink>
            <NavLink to="locations" className={getNavLinkClass}>
              <p>Locations</p>
            </NavLink>
            <NavLink to="settings" className={getNavLinkClass}>
              <p>Settings</p>
            </NavLink>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="font-semibold text-[17px]">Pay</p>
            <NavLink to="commisions" className={getNavLinkClass}>
              <p>Commisions</p>
            </NavLink>
          </div>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

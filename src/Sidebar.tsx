import { NavLink } from "react-router-dom";
import CalendarSvg from "./components/svgs/CalendarSvg";
import HomeSvg from "./components/svgs/HomeSvg";
import ProfileSvg from "./components/svgs/ProfileSvg";
import SettingsSvg from "./components/svgs/SettingsSvg";
import TeamSvg from "./components/svgs/TeamSvg";

export default function Sidebar() {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-blue-500 p-2 rounded-lg cursor-pointer"
      : "hover:bg-[#d9d9d95a] p-2 rounded-lg cursor-pointer";

  return (
    <div className="fixed left-0 bg-[#101928] top-20 bg- py-10 w-20 h-screen z-1">
      <ul className="flex flex-col items-center gap-y-7">
        <NavLink to="dashboard" className={getNavLinkClass}>
          <li>
            <HomeSvg />
          </li>
        </NavLink>
        <NavLink to="calendar" className={getNavLinkClass}>
          <li>
            <CalendarSvg />
          </li>
        </NavLink>
        <NavLink to="team" className={getNavLinkClass}>
          <li>
            <TeamSvg />
          </li>
        </NavLink>
        <NavLink to="profile" className={getNavLinkClass}>
          <li>
            <ProfileSvg />
          </li>
        </NavLink>
        <NavLink to="settings" className={getNavLinkClass}>
          <li>
            <SettingsSvg />
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

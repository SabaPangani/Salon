import { NavLink } from "react-router-dom";
import NotificationsSvg from "./components/svgs/NotificationsSvg";
import SearchSvg from "./components/svgs/SearchSvg";
import CalendarSvg from "./components/svgs/CalendarSvg";
import HomeSvg from "./components/svgs/HomeSvg";
import ProfileSvg from "./components/svgs/ProfileSvg";
import SettingsSvg from "./components/svgs/SettingsSvg";
import TeamSvg from "./components/svgs/TeamSvg";
import Catalogue from "./components/svgs/CatalogueSvg";

export default function Navbar() {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-blue-500 p-2 rounded-lg cursor-pointer"
      : "hover:bg-[#d9d9d95a] p-2 rounded-lg cursor-pointer";
  return (
    <nav className="fixed top-0 left-0 bg-white w-full py-4 px-6 flex items-center justify-between border-b border-b-border z-10">
      <h1 className="font-bold text-2xl">Beauty</h1>
      <ul className="flex flex-row gap-x-5 items-center gap-y-7">
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
        <NavLink to="catalogue" className={getNavLinkClass}>
          <li>
            <Catalogue />
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
      <ul className="flex flex-row items-center justify-center gap-x-6">
        <li className="cursor-pointer hover:bg-[#f2f2f270] hover:rounded-full p-3">
          <SearchSvg />
        </li>
        <li className="cursor-pointer hover:bg-[#f2f2f270] hover:rounded-full p-3">
          <NotificationsSvg />
        </li>
      </ul>
    </nav>
  );
}

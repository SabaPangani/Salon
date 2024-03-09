import NotificationsSvg from "./components/svgs/NotificationsSvg";
import SearchSvg from "./components/svgs/SearchSvg";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 bg-white w-full py-4 px-6 flex items-center justify-between border-b border-b-border z-10">
      <h1 className="font-bold text-2xl">Beauty</h1>
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

import { useNavigate } from "react-router-dom";
import User from "../components/User";
export default function Team() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("add/profile");
  };
  return (
    <div className="w-full max-w-[900px] flex flex-col gap-y-5 my-36">
      <header className="flex flex-row items-center justify-between">
        <h1 className="text-3xl text-dark font-bold">Team members</h1>

        <button className="btn-primary" onClick={handleClick}>Add</button>
      </header>

      <div className="bg-white py-4 px-3 rounded-md">
        <input
          type="text"
          className="input"
          placeholder="Search team members"
        />
      </div>

      <div className="flex flex-col bg-white p-5 rounded-md">
        <ul className="flex flex-row justify-between px-4 pb-3 border-b border-b-border">
          <li>Name</li>
          <li>Contact</li>
          <li>Rating</li>
        </ul>

        <ul className="mt-3">
          <li>
            <User />
          </li>
        </ul>
      </div>
    </div>
  );
}

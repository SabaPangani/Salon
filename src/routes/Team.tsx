import { Link, useNavigate } from "react-router-dom";
import User from "../components/User";
import { useEffect, useState } from "react";
export default function Team() {
  const [team, setTeam] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("add/profile");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://localhost:7121/api/employee");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const json = await res.json();
        setTeam(json.data);
        console.log(team);
        console.log(json);
      } catch (error: any) {
        console.error("Fetch error: " + error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col gap-y-5">
      <header className="flex flex-row items-center justify-between">
        <h1 className="text-3xl font-semibold">Team members</h1>

        <button className="btn-primary" onClick={handleClick}>
          Add
        </button>
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

        <ul className="mt-3 flex flex-col gap-y-5">
          {team.map((member: any) => (
            <Link to={"add/services"} state={{ id: member.id }}>
              <li key={member.id}>
                <User
                  name={member.firstName}
                  lastName={member.lastName}
                  number={member.phoneNumber}
                  email={member.email}
                  review=""
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

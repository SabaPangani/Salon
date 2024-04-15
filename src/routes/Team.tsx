import { Link, useNavigate } from "react-router-dom";
import User from "../components/User";
import { ChangeEvent, useEffect, useState } from "react";
import { useEmployee } from "../hooks/useEmployee";

export default function Team() {
  const navigate = useNavigate();
  const { employees, setSelectedEmployee, filterEmployees } = useEmployee()!;
  const [searchTerm, setSearchTerm] = useState(""); 

  const handleClick = () => {
    navigate("add/profile");
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredEmployees = filterEmployees(searchTerm)


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
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="flex flex-col bg-white p-5 rounded-md">
        <ul className="flex flex-row justify-between px-4 pb-3 border-b border-b-border">
          <li>Name</li>
          <li>Contact</li>
          <li>Rating</li>
        </ul>

        <ul className="mt-3 flex flex-col gap-y-5">
          {filteredEmployees.map((employee: any) => (
            <Link
              to={"add/profile"}
              onClick={() => {
                setSelectedEmployee(employee);
              }}
              key={employee.id}
            >
              <li>
                <User
                  name={employee.firstName}
                  lastName={employee.lastName}
                  number={employee.phoneNumber}
                  email={employee.email}
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

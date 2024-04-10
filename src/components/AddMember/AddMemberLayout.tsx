import { NavLink, Outlet, useNavigate } from "react-router-dom";
import CancelSvg from "../svgs/CancelSvg";
import { FormEvent, useState } from "react";

export default function AddMember() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [serviceId, setServiceId] = useState("");

  const handleClick = () => {
    navigate("/team");
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("https://localhost:7121/api/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: name,
          lastName: lastName,
          email: email,
          phoneNumber: number,
          color: "string",
          jobTitle: jobTitle,
          serviceId: serviceId,
          startDate: "2024-03-29",
          endDate: "2024-03-29",
        }),
      });
      if (!res.ok) {
        throw new Error(`Failed to add team member ${res.status}`);
      }
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-light-purple text-[15px] cursor-pointer rounded-md p-2"
      : "text-[15px] cursor-pointer";
  return (
    <div className="max-w-[1300px] w-full mx-auto flex flex-col gap-y-5">
      <form onSubmit={handleSubmit}>
        <header className="flex flex-row items-center justify-between mt-5">
          <span onClick={handleClick} className="cursor-pointer">
            <CancelSvg />
          </span>
          <button type="submit" className="btn-primary">
            Add
          </button>
        </header>

        <h1 className="text-dark text-4xl font-bold mt-10 pl-16 mb-8">
          Add team member
        </h1>
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

          <div className="w-[850px] flex flex-col gap-y-10 bg-white p-10 rounded-xl border border-border">
            <Outlet
              context={{
                setName,
                setLastName,
                setEmail,
                setNumber,
                setJobTitle,
                setServiceId,
                serviceId,
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

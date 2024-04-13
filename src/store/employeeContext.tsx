import { createContext, useEffect, useState } from "react";
import { EmployeeContextType } from "../shared/EmployeeContextType";
import { EmployeeType } from "../shared/EmployeeType";
import { EmptyEmployee } from "../shared/EmployeeType";

export const employeeContext = createContext<EmployeeContextType | null>(null);

export const EmployeeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedEmployee, setSelectedEmployee] =
    useState<EmployeeType>(EmptyEmployee);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://localhost:7121/api/employee");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const json = await res.json();
        setEmployees(json.data);
      } catch (error: any) {
        console.error("Fetch error: " + error.message);
      }
    };

    fetchData();
  }, []);

  const createEmployee = async (
    fname: string,
    lastName: string,
    email: string,
    number: string,
    jobTitle: string,
    serviceId: string
  ) => {
    try {
      const res = await fetch("https://localhost:7121/api/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: fname,
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
  const updateEmployee = async (
    id: string,
    fname: string,
    lastName: string,
    email: string,
    number: string,
    jobTitle: string,
    serviceId: string
  ) => {
    try {
      const res = await fetch("https://localhost:7121/api/employee", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          firstName: fname,
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
  return (
    <employeeContext.Provider
      value={{
        createEmployee,
        updateEmployee,
        selectedEmployee,
        setSelectedEmployee,
        employees,
      }}
    >
      {children}
    </employeeContext.Provider>
  );
};
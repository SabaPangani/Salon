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

  return (
    <employeeContext.Provider
      value={{
        selectedEmployee,
        setSelectedEmployee,
        employees,
      }}
    >
      {children}
    </employeeContext.Provider>
  );
};

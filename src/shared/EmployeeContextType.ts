import { Dispatch, SetStateAction } from "react";
import { EmployeeType } from "./EmployeeType";
import { ServiceType } from "./ServiceType";

export type EmployeeContextType = {
  createEmployee: (
    fname: string,
    lastName: string,
    email: string,
    number: string,
    jobTitle: string,
    services: ServiceType[]
  ) => void;
  updateEmployee: (
    id: string,
    fname: string,
    lastName: string,
    email: string,
    number: string,
    jobTitle: string,
    services: ServiceType[]
  ) => void;
  selectedEmployee: EmployeeType;
  setSelectedEmployee: Dispatch<SetStateAction<EmployeeType>>;
  employees: EmployeeType[];
  filterEmployees: (searchTerm: string) => EmployeeType[];
};

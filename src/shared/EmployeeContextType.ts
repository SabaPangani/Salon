import { Dispatch, SetStateAction } from "react";
import { EmployeeType } from "./EmployeeType";

export type EmployeeContextType = {
  createEmployee: (
    fname: string,
    lastName: string,
    email: string,
    number: string,
    jobTitle: string,
    serviceId: string
  ) => void;
  updateEmployee: (
    id: string,
    fname: string,
    lastName: string,
    email: string,
    number: string,
    jobTitle: string,
    serviceId: string
  ) => void;
  selectedEmployee: EmployeeType;
  setSelectedEmployee: SetStateAction<Dispatch<EmployeeType>>;
  employees: EmployeeType[];
};

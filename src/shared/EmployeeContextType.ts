import { Dispatch, SetStateAction } from "react";
import { EmployeeType } from "./EmployeeType";

export type EmployeeContextType = {
  selectedEmployee: EmployeeType;
  setSelectedEmployee: SetStateAction<Dispatch<EmployeeType>>;
  employees: EmployeeType[];
};

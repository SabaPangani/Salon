import { useContext } from "react";
import { employeeContext } from "../store/employeeContext";

export const useEmployee = () => useContext(employeeContext);

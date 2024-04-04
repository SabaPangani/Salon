import { useContext } from "react";
import { serviceContext } from "../store/serviceContext";

export const useService = () => useContext(serviceContext);

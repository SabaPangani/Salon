import { Dispatch, SetStateAction } from "react";
import { CategoryType, ServiceType } from "./ServiceType";

export type ServiceContextType = {
  services: ServiceType[];
  setServices: Dispatch<SetStateAction<ServiceType[]>>;
  createCategory: (name: string, color: string, desc: string) => void;
  createService: (
    name: string,
    desc: string,
    afterCareDesc: string,
    categoryId: string
  ) => void;
};

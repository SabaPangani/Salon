import { Dispatch, SetStateAction } from "react";
import { CategoryType, ServiceType } from "./ServiceType";

export type ServiceContextType = {
  services: CategoryType[];
  setServices: Dispatch<SetStateAction<CategoryType[]>>;
  createCategory: (name: string, color: string, desc: string) => void;
  updateCategory: (
    id: string,
    name: string,
    color: string,
    desc: string
  ) => void;
  createService: (
    name: string,
    desc: string,
    afterCareDesc: string,
    categoryId: string
  ) => void;
  updateService: (
    id: string,
    name: string,
    desc: string,
    afterCareDesc: string,
    categoryId: string
  ) => void;
  deleteService: (id: string) => void;
  deleteCategory: (id: string) => void;
  selectedEmployee: any;
  setSelectedEmployee: any;
};

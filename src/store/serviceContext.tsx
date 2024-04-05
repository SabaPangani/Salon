import { createContext, useEffect, useState } from "react";
import { ServiceContextType } from "../shared/ServiceContextType";
import { CategoryType, ServiceType } from "../shared/ServiceType";

export const serviceContext = createContext<ServiceContextType | null>(null);

export const ServiceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const [categories, setCategories] = useState<CategoryType[]>([]);
  const [services, setServices] = useState<CategoryType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://localhost:7121/api/service");
        if (!res.ok) {
          throw new Error(`Failed to fetch services, ${res.status}`);
        }
        const json = await res.json();
        setServices(json.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(services);

  const createCategory = async (name: string, color: string, desc: string) => {
    try {
      const category = { name, color, desc };
      const res = await fetch("https://localhost:7121/api/servicecategory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(category),
      });
      if (!res.ok) {
        throw new Error(`Failed to create category, ${res.status}`);
      }
      const json = await res.json();
      // setCategories((prev) => [...prev, json]);
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };
  const createService = (
    name: string,
    desc: string,
    afterCareDesc: string,
    categoryId: string
  ) => {};

  return (
    <serviceContext.Provider
      value={{ services, setServices, createCategory, createService }}
    >
      {children}
    </serviceContext.Provider>
  );
};

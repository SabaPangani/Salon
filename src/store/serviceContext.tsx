import { createContext, useEffect, useState } from "react";
import { ServiceContextType } from "../shared/ServiceContextType";
import { CategoryType } from "../shared/ServiceType";
import { API_URL } from "./employeeContext";

export const serviceContext = createContext<ServiceContextType | null>(null);

export const ServiceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const [categories, setCategories] = useState<CategoryType[]>([]);
  const [services, setServices] = useState<CategoryType[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/service`);
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
      const res = await fetch(`${API_URL}/servicecategory`, {
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
  const updateCategory = async (
    id: string,
    name: string,
    color: string,
    desc: string
  ) => {
    try {
      const category = { id, name, color, desc };
      const res = await fetch(`${API_URL}/servicecategory`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(category),
      });
      if (!res.ok) {
        throw new Error(`Failed to update category, ${res.status}`);
      }
      const json = await res.json();
      // setCategories((prev) => [...prev, json]);
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };
  const createService = async (
    name: string,
    desc: string,
    afterCareDesc: string,
    categoryId: string
  ) => {
    try {
      const service = {
        name,
        aftercareDescription: afterCareDesc,
        description: desc,
        categoryId,
      };
      console.log(service);
      const res = await fetch(`${API_URL}/service`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(service),
      });
      if (!res.ok) {
        throw new Error(`Failed to create category, ${res.status}`);
      }
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };
  const updateService = async (
    id: string,
    name: string,
    desc: string,
    afterCareDesc: string,
    categoryId: string
  ) => {
    try {
      const service = {
        id,
        name,
        description: desc,
        afterCareDescription: afterCareDesc,
        categoryId,
      };
      console.log(service);

      const res = await fetch(`${API_URL}/service`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(service),
      });

      if (!res.ok) {
        throw new Error(`Failed to update service, status code: ${res.status}`);
      }

      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteService = async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/service/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(id),
      });

      if (!res.ok) {
        throw new Error(`Failed to delete service, status code: ${res.status}`);
      }

      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteCategory = async (id: string) => {
    try {
      const res = await fetch(
        `${API_URL}/servicecategory/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(id),
        }
      );

      if (!res.ok) {
        throw new Error(
          `Failed to delete category, status code: ${res.status}`
        );
      }

      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <serviceContext.Provider
      value={{
        services,
        setServices,
        createCategory,
        updateCategory,
        deleteCategory,
        deleteService,
        createService,
        updateService,
        selectedEmployee,
        setSelectedEmployee
      }}
    >
      {children}
    </serviceContext.Provider>
  );
};

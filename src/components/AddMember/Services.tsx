import { useLocation, useOutletContext } from "react-router-dom";
import { useService } from "../../hooks/useService";
import { ServiceType } from "../../shared/ServiceType";
import { useState } from "react";
import { EmployeeType } from "../../shared/EmployeeType";
interface ProfileContextType {
  employee: EmployeeType;
  formData: any;
  handleChange: any;
}
export default function Services() {
  const { services } = useService()!;
  const { formData, employee, handleChange } =
    useOutletContext() as ProfileContextType;

  console.log(employee.id);
  const [serviceId, setServiceId] = useState("");
  const handleServiceAssign = async () => {
    const employeeService = {
      employeeId: employee?.id,
      serviceId,
      price: 0,
      percentage: 0,
    };
    console.log(employeeService);
    try {
      const res = await fetch("https://localhost:7121/api/employeeservice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employeeService),
      });

      if (!res.ok) {
        throw new Error(`Failed to assign employee a service, ${res.status}`);
      }
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div>
        <h1 className="text-dark font-semibold text-3xl mb-1">Services</h1>
        <p className="text-gray font-medium">
          Choose the services this team member provides
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-5 w-full mt-5">
        <label className="block border-b border-border pb-2 w-full">
          <span className="text-dark font-bold">Select a Service</span>
          <select
            className="form-select mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            defaultValue=""
            onChange={(e) => {
              const selectedId = e.target.value;
              setServiceId(selectedId);
              for (const category of services) {
                const foundService: ServiceType = category.services.find(
                  (service) => service.id === selectedId
                )!;
                console.log(foundService);
                if (foundService) {
                  handleChange("services")([foundService]);
                  break;
                }
              }
            }}
          >
            <option disabled value="">
              Choose...
            </option>
            {services.map((category) => (
              <optgroup label={`${category.name}`} key={category.categoryId}>
                {category.services.map((service) => (
                  <option value={service.id} key={service.id}>
                    {service.name} - 45min
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </label>

        {employee && (
          <button
            className="btn-secondary mt-7"
            onClick={handleServiceAssign}
            type="button"
          >
            Assign service
          </button>
        )}
      </div>
    </>
  );
}

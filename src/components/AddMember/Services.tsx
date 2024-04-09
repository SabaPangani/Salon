import { checkDomainOfScale } from "recharts/types/util/ChartUtils";
import { useService } from "../../hooks/useService";
import { ServiceType } from "../../shared/ServiceType";

export default function Services() {
  const { services, setServices } = useService()!;

  const handleServiceChange = (
    serviceId: string,
    catId: string,
    value: boolean
  ) => {
    const updatedService =
      services
        .find((cat) => {
          cat.categoryId === catId;
        })
        ?.services.find((service) => service.id === serviceId)?.isChecked ===
      value;
  };
  return (
    <>
      <div>
        <h1 className="text-dark font-semibold text-3xl mb-1">Services</h1>
        <p className="text-gray font-medium">
          Choose the services this team member provides
        </p>
      </div>

      <div className="flex flex-row gap-x-3 items-center">
        <span className="font-semibold rounded-3xl bg-black py-2 px-3 text-center text-white text-[15px]">
          Hair & styling
        </span>
        <span className="font-semibold text-[15px]">Nails</span>
      </div>

      <div className="flex flex-col items-start justify-center gap-y-5">
        <label className="inline-flex items-center border-b border-border pb-5 w-full cursor-pointer">
          <input type="checkbox" className="text-blue-600 h-5 w-5" />
          <span className="ml-4 text-4ark font-semibold">All services (5)</span>
        </label>
        <ul className="w-full">
          {services.map((category) => (
            <li
              className="flex flex-col gap-y-10 w-full mt-5"
              key={category.categoryId}
            >
              <label className="inline-flex items-center border-b border-border pb-5 cursor-pointer w-full">
                <input
                  type="checkbox"
                  className="text-blue-600 h-5 w-5"
                  checked={category.isChecked}
                />
                <span className="ml-4 text-dark font-bold">
                  {category.name} (4)
                </span>
              </label>
              {category.services.map((service: ServiceType) => (
                <label
                  className="inline-flex items-start flex-col cursor-pointer"
                  key={service.id}
                >
                  <div className="flex flex-row items-center">
                    <input
                      type="checkbox"
                      className="text-blue-600 h-5 w-5"
                      checked={category.isChecked}
                      onChange={(e) => {
                        handleServiceChange(
                          service.id,
                          category.categoryId,
                          e.target.checked
                        );
                      }}
                    />
                    <div className="flex flex-col">
                      <span className="ml-4 text-dark font-medium">
                        {service.name}
                      </span>
                      <span className="ml-4 text-sm font-medium text-gray">
                        45min
                      </span>
                    </div>
                  </div>
                  <div className="bg-border h-[1px] mt-5 ml-7 w-full"></div>
                </label>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

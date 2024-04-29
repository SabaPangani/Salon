import { FormEvent } from "react";
import { useService } from "../../hooks/useService";
import { CategoryType, ServiceType } from "../../shared/ServiceType";
import CancelSvg from "../svgs/CancelSvg";

export default function AppointmentModal({
  toggleModal,
  handleFormSubmit,
}: {
  toggleModal: () => void;
  handleFormSubmit: (
    e: FormEvent<HTMLFormElement>,
    serviceName: string
  ) => void;
}) {
  const { services } = useService()!;
  return (
    <>
      <div
        className="absolute left-0 top-0 w-screen h-screen bg-black opacity-30 z-10"
        onClick={toggleModal}
      ></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-5 rounded-md w-[300px]">
        <div className="flex flex-row justify-between items-center mb-10 border-border border-b pb-3">
          <p className="text-dark text-xl font-bold">Select a service</p>
          <p onClick={toggleModal}>
            <CancelSvg />
          </p>
        </div>
        <ul className="flex flex-col gap-y-5">
          {services.map((category) => (
            <li
              key={category.categoryId}
              className="text-lg text-dark font-medium border-border border-b pb-5 px-5 cursor-pointer flex flex-col items-center gap-x-5"
            >
              <span className="text-xl font-bold">{category.name}</span>
              <div className="flex flex-col mt-2">
                {category.services.map((service: ServiceType) => (
                  <span
                    className=""
                    onClick={(e: any) => {
                      toggleModal();
                      handleFormSubmit(e, service.name);
                    }}
                  >
                    {service.name}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ArrowDownSvg from "../components/svgs/ArrowDownSvg";
import CreateCategory from "../components/modals/CreateCategory";
import { useService } from "../hooks/useService";

export default function Catalogue() {
  const { services, setServices } = useService()!;
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([
    {
      name: "Hair & styling",
      services: [
        { name: "Haircut", duration: "45min", price: "GEL 40" },
        { name: "Hair color", duration: "1h 15min", price: "GEL 57" },
        { name: "Blow dry", duration: "45min", price: "GEL 35" },
        { name: "Balayage", duration: "2h 35min", price: "GEL 150" },
      ],
    },
    {
      name: "Nails",
      services: [{ name: "Manicure", duration: "45min", price: "GEL 20" }],
    },
  ]);

  const reorderServices = (categoryName: any, newServicesOrder: any) => {
    const newItems = items.map((item) => {
      if (item.name === categoryName) {
        return { ...item, services: newServicesOrder };
      }
      return item;
    });
    setItems(newItems);
  };

  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <>
      <div className="w-full flex flex-col gap-y-16">
        <header className="flex flex-row justify-between items-center relative">
          <h1 className="text-3xl font-semibold">Services menu</h1>
          <button
            className="btn-primary flex flex-row items-center px-4 gap-x-3"
            onClick={() => {
              setShowDropdown((prev) => !prev);
            }}
          >
            <span>Add</span>
            <ArrowDownSvg />
          </button>
          {showDropdown && (
            <div className="absolute -right-3 top-[55px] flex flex-col gap-y-3 bg-light-purple rounded-md px-4 py-3 shadow-md">
              <NavLink to="service/add">
                <span className="text-sm text-dark cursor-pointer">
                  New service
                </span>
              </NavLink>
              <span
                className="text-sm text-dark cursor-pointer"
                onClick={toggleModal}
              >
                New category
              </span>
            </div>
          )}
        </header>

        <div className="flex flex-col gap-y-8">
          <Reorder.Group
            values={services}
            onReorder={setServices}
            className="flex flex-col gap-y-5"
          >
            {services.map((category) => (
              <Reorder.Item value={category} key={category.name}>
                <Reorder.Group
                  values={category.services}
                  onReorder={(newOrder) =>
                    reorderServices(category.name, newOrder)
                  }
                >
                  <div className="flex flex-col gap-y-2">
                    <h1 className="text-xl font-semibold mb-2 pl-6">
                      {category.name}
                    </h1>
                    {category.services.map((service) => (
                      <Reorder.Item value={service} key={service.name}>
                        <div className="flex justify-between items-center border border-border py-4 px-5 rounded-md cursor-pointer">
                          <h4 className="font-medium">{service.name}</h4>
                          <p className="text-gray min-w-[95px] text-right text-sm font-medium">
                            {service.duration}
                          </p>
                          <p className="font-semibold">{service.price}</p>
                        </div>
                      </Reorder.Item>
                    ))}
                  </div>
                </Reorder.Group>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      </div>
      {showModal && <CreateCategory toggleModal={toggleModal} />}
    </>
  );
}

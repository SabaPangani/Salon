import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ArrowDownSvg from "../components/svgs/ArrowDownSvg";
import CreateCategory from "../components/modals/CreateCategory";
import { useService } from "../hooks/useService";

export default function Catalogue() {
  const { services, setServices } = useService()!;
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);

  console.log(services);
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

        <ul className="flex flex-col gap-y-8">
          {services.map((category) => (
            <li className="flex flex-col gap-y-2" key={category.categoryId}>
              <h1 className="text-2xl font-semibold mb-2 pl-6">
                {category.name}
              </h1>
              {category.services.map((service) => (
                <Link
                  key={service.id}
                  to={{
                    pathname: "service/add",
                  }}
                  state={{ category, service }}
                >
                  <div className="flex justify-between items-center border-border border py-4 px-5 rounded-sm cursor-pointer">
                    <h4 className="font-medium text-lg">{service.name}</h4>
                    <p className="text-gray min-w-[95px] text-right text-sm font-medium">
                      {service.duration}
                    </p>
                    <p className="font-semibold">{service.price}</p>
                  </div>
                </Link>
              ))}
            </li>
          ))}
        </ul>
      </div>
      {showModal && <CreateCategory toggleModal={toggleModal} />}
    </>
  );
}

import { FormEvent, useState } from "react";
import Input from "./Input";
import CategoryModal from "./modals/CategoryModal";
import { useService } from "../hooks/useService";
import { ServiceType } from "../shared/ServiceType";

export default function AddService() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [category, setCategory] = useState<ServiceType>();
  const toggleModal = () => setShowModal((prev) => !prev);

  const { createService } = useService()!;
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createService(name, desc, serviceType, category?.categoryId!);
  };
  return (
    <>
      <h1 className="text-center text-2xl font-semibold mt-16">
        Add a new single service
      </h1>
      <div>
        <div className="mx-auto mt-20 w-[900px] border border-border rounded-md p-5 bg-white">
          <header className="border-b border-border px-2 pb-1">
            <h1 className="text-2xl font-semibold">Basic info</h1>
            <p className="text-[15px]">
              Add a service name and choose the service type.
            </p>
          </header>

          <form className="pr-96 pl-2 mt-5" onSubmit={handleSubmit}>
            <label>
              <span className="text-sm font-semibold">Service name</span>
              <Input
                type="text"
                placeholder=""
                onChange={(e) => {
                  setName(e);
                }}
                value=""
              />
            </label>
            <label>
              <span className="text-sm font-semibold">Service category</span>
              <div className="input flex items-center justify-between" id="">
                <span className="font-semibold text-dark">{category?.name}</span>
                <span
                  className="cursor-pointer font-medium text-purple"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Edit
                </span>
              </div>
            </label>
            <label>
              <span className="text-sm font-semibold">Service type</span>
              <Input
                type="textarea"
                placeholder=""
                onChange={(e) => {
                  setServiceType(e);
                }}
                value=""
              />
            </label>
            <label>
              <span className="text-sm font-semibold">
                Aftercare description
              </span>
              <Input
                type="textarea"
                placeholder=""
                onChange={(e) => {
                  setDesc(e);
                }}
                value=""
              />
            </label>

            <button className="btn-primary" type="submit">
              Save
            </button>
          </form>
        </div>
        <div>
          <div className="mx-auto my-5 w-[900px] border border-border rounded-md p-5 bg-white">
            <header className="border-b border-border px-2 pb-1">
              <h1 className="text-2xl font-semibold">Team</h1>
              <p className="text-[15px]">
                Assign team members to the service and manage commission
              </p>
            </header>
            <div>{/* team members here */}</div>
          </div>
        </div>
      </div>

      {showModal && (
        <CategoryModal toggleModal={toggleModal} onSetCategory={setCategory} />
      )}
    </>
  );
}

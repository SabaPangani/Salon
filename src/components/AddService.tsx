import { useState } from "react";
import Input from "./Input";
import CategoryModal from "./modals/CategoryModal";

export default function AddService() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prev) => !prev);

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

          <form className="pr-96 pl-2 mt-5">
            <label>
              <span className="text-sm font-semibold">Service name</span>
              <Input type="text" placeholder="" onChange={() => {}} value="" />
            </label>
            <label>
              <span className="text-sm font-semibold">Service category</span>
              <div className="input flex items-center justify-end" id="">
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
                onChange={() => {}}
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
                onChange={() => {}}
                value=""
              />
            </label>
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

      {showModal && <CategoryModal toggleModal={toggleModal} />}
    </>
  );
}

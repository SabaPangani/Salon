import { FormEvent, useState } from "react";
import Input from "./Input";
import CategoryModal from "./modals/CategoryModal";
import { useService } from "../hooks/useService";
import { CategoryType } from "../shared/ServiceType";
import { Link, useLocation } from "react-router-dom";
import CancelSvg from "./svgs/CancelSvg";
export default function AddService() {
  const { state } = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [afterCareDesc, setAfterCareDesc] = useState("");
  const [category, setCategory] = useState<CategoryType>();
  const toggleModal = () => setShowModal((prev) => !prev);
  const { createService, updateService, deleteService } = useService()!;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state?.service.id) {
      updateService(
        state.service.id,
        name,
        desc,
        afterCareDesc,
        state.category?.categoryId
      );
      return;
    }
    createService(name, desc, afterCareDesc, category?.categoryId!);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
        <div className="flex flex-row items-center justify-between my-5 px-24">
          <Link to={"/catalogue"}>
            <CancelSvg />
          </Link>
          <h1 className="text-2xl font-semibold">
            {state?.service.id ? "Edit a service" : "Add a new service"}
          </h1>
          <div className="">
            {state?.service.id && (
              <button
                className="btn-primary bg-red mr-5"
                onClick={() => {
                  deleteService(state?.service.id);
                }}
                type="button"
              >
                Delete
              </button>
            )}
            <button className="btn-primary" type="submit">
              Save
            </button>
          </div>
        </div>
        <div className="mx-auto mt-20 w-[600px] border border-border rounded-md p-5 bg-white">
          <header className="border-b border-border px-2 pb-1">
            <h1 className="text-2xl font-semibold">Basic info</h1>
            <p className="text-[15px]">
              Add a service name and choose the service type.
            </p>
          </header>

          <div className="pr-24 pl-2 mt-5">
            <label>
              <span className="text-sm font-semibold">Service name</span>
              <Input
                type="text"
                placeholder=""
                onChange={(e) => {
                  setName(e);
                }}
                value={state?.service ? state?.service?.name : ""}
              />
            </label>
            <label>
              <span className="text-sm font-semibold">Service category</span>
              <div className="input flex items-center justify-between" id="">
                <span className="font-semibold text-dark">
                  {state?.category.name ? state.category.name : category?.name}
                </span>
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
              <span className="text-sm font-semibold">Service description</span>
              <Input
                type="textarea"
                placeholder=""
                onChange={(e) => {
                  setAfterCareDesc(e);
                }}
                value={state?.service ? state?.service?.description : ""}
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
                value={
                  state?.service ? state?.service?.afterCareDescription : ""
                }
              />
            </label>
          </div>
        </div>
        <div>
          <div className="mx-auto my-5 w-[600px] border border-border rounded-md p-5 bg-white">
            <header className="border-b border-border px-2 pb-1">
              <h1 className="text-2xl font-semibold">Team</h1>
              <p className="text-[15px]">
                Assign team members to the service and manage commission
              </p>
            </header>
            <div>{/* team members here */}</div>
          </div>
        </div>

        {showModal && (
          <CategoryModal
            toggleModal={toggleModal}
            onSetCategory={setCategory}
          />
        )}
      </form>
    </>
  );
}

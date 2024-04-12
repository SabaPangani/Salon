import { FormEvent, useState } from "react";
import Input from "./Input";
import CategoryModal from "./modals/CategoryModal";
import { useService } from "../hooks/useService";
import { CategoryType } from "../shared/ServiceType";
import { useLocation, useNavigate } from "react-router-dom";
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

            <button className="btn-primary" type="submit">
              Save
            </button>
            <button
              className="btn-primary bg-red"
              onClick={() => {
                deleteService(state?.service.id);
              }}
              type="button"
            >
              Delete
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

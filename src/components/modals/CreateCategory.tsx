import CancelSvg from "../svgs/CancelSvg";
import Input from "../Input";
import { useService } from "../../hooks/useService";
import { useState } from "react";

export default function CreateCategory({
  toggleModal,
}: {
  toggleModal: () => void;
}) {
  const { createCategory } = useService()!;
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <>
      <div
        className="absolute left-0 top-0 w-screen h-screen bg-black opacity-30 z-10"
        onClick={toggleModal}
      ></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white shadow-lg p-5 rounded-md z-20">
        <header className="flex flex-row justify-between items-center mb-7 border-border border-b pb-4">
          <h1 className="text-dark font-semibold text-xl">New category</h1>{" "}
          <span onClick={toggleModal} className="cursor-pointer">
            <CancelSvg />
          </span>
        </header>
        <form className="flex flex-col gap-y-2">
          <label>
            <span className="text-sm font-medium">Category name</span>{" "}
            <Input
              type="text"
              placeholder="e.g Hair Services"
              onChange={(newValue) => setName(newValue)}
              value=""
            />
          </label>
          <label>
            <span className="text-sm font-medium">Category color</span>{" "}
            <Input
              type="text"
              placeholder="e.g Blue"
              onChange={(newValue) => setColor(newValue)}
              value=""
            />
          </label>
          <label>
            <span className="text-sm font-medium">Category description</span>{" "}
            <Input
              type="textarea"
              placeholder=""
              onChange={(newValue) => setDesc(newValue)}
              value=""
            />
          </label>
          <div className="border-border border-t flex justify-end items-center mt-5">
            <button className="btn-primary mt-5" type="submit">
              <span
                onClick={() => {
                  createCategory(name, color, desc);
                }}
              >
                Add
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

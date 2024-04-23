
import { useService } from "../../hooks/useService";
import { CategoryType } from "../../shared/ServiceType";
import CancelSvg from "../svgs/CancelSvg";

export default function CategoryModal({
  toggleModal,
  onSetCategory,
}: {
  toggleModal: () => void;
  onSetCategory: (category: string) => void;
}) {
  const { services } = useService()!;

  return (
    <>
      <div
        className="absolute left-0 top-0 w-screen h-screen bg-black opacity-30 z-10"
        onClick={toggleModal}
      ></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-5 rounded-md w-[600px]">
        <div className="flex flex-row justify-between items-center mb-10 border-border border-b pb-3">
          <p className="text-dark text-xl font-bold">Select category</p>
          <p onClick={toggleModal}>
            <CancelSvg />
          </p>
        </div>
        <ul className="flex flex-col gap-y-5">
          {services.map((category) => (
            <li
              key={category.categoryId}
              className="text-lg text-dark font-medium border-border border-b pb-5 px-5 cursor-pointer flex flex-row items-center gap-x-5"
              onClick={() => {
                onSetCategory(category.categoryId);
                toggleModal();
              }}
            >
              <div className="rounded-full bg-cyan-600 w-6 h-6"></div>
              <span>{category.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

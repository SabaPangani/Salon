import { useService } from "../../hooks/useService";

export default function CategoryModal({
  toggleModal,
}: {
  toggleModal: () => void;
}) {
  const { services } = useService()!;
  return (
    <>
      <div
        className="absolute left-0 top-0 w-screen h-screen bg-black opacity-30 z-10"
        onClick={toggleModal}
      ></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-5 rounded-md w-[600px]">
        <p className="text-dark text-2xl font-medium mb-10">Select category</p>
        <ul className="flex flex-col gap-y-5">
          {services.map((category) => (
            <li key={category.categoryId} className="text-xl text-dark font-medium border-border border-b pb-1 px-5 cursor-pointer">{category?.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

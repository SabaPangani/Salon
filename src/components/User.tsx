export default function User() {
  return (
    <div className="flex flex-row justify-between items-center px-4 cursor-pointer">
      <div className="flex flex-row items-center gap-x-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
          alt=""
          className="w-[78px] h-[78px] rounded-full border-2 p-[2px] border-purple"
        />
        <h3 className="text-dark font-semibold">Saba Pangani</h3>
      </div>
      <div className="flex flex-col">
        <a
          href="mailto:spangani37@gmail.com"
          className="text-[15px] text-purple"
        >
          Spangani37@gmail.com
        </a>
        <a href="tel:+995 599 41 08 21" className="text-[15px] text-purple">
          +995 599 41 08 21
        </a>
      </div>
      <span className="text-[15px] text-gray">No reviews yet</span>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <div>
        <h1 className="text-dark font-semibold text-3xl mb-1">Services</h1>
        <p className="text-gray font-medium">
          Choose the services this team member provides
        </p>
      </div>

      <div className="flex flex-row gap-x-3 items-center">
        <span className="font-semibold rounded-3xl bg-black py-2 px-3 text-center text-white text-[15px]">
          Hair & styling
        </span>
        <span className="font-semibold text-[15px]">Nails</span>
      </div>

      <div className="flex flex-col items-start justify-center gap-y-5">
        <label className="inline-flex items-center border-b border-border pb-5 w-full cursor-pointer">
          <input
            type="checkbox"
            className="text-blue-600 h-5 w-5"
          />
          <span className="ml-4 text-4ark font-semibold">
            All services (5)
          </span>
        </label>
        <div className="flex flex-col gap-y-10 w-full mt-5">
          <label className="inline-flex items-center border-b border-border pb-5 cursor-pointer">
            <input
              type="checkbox"
              className="text-blue-600 h-5 w-5"
            />
            <span className="ml-4 text-dark font-semibolm">
              Hair & styling (4)
            </span>
          </label>
          <label className="inline-flex items-start flex-col cursor-pointer">
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                className="text-blue-600 h-5 w-5"
              />
              <span className="ml-4 text-dark font-medium">Haircut</span>
            </div>
            <div className="bg-border h-[1px] mt-5 ml-7 w-full"></div>
          </label>
          <label className="inline-flex items-start flex-col cursor-pointer">
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                className="text-blue-600 h-5 w-5"
              />
              <span className="ml-4 text-dark font-medium">Hair color</span>
            </div>
            <div className="bg-border h-[1px] mt-5 ml-7 w-full"></div>
          </label>
          <label className="inline-flex items-start flex-col cursor-pointer">
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                className="text-blue-600 h-5 w-5"
              />
              <span className="ml-4 text-dark font-medium">Blow dry</span>
            </div>
            <div className="bg-border h-[1px] mt-5 ml-7 w-full"></div>
          </label>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="text-blue-600 h-5 w-5"
            />
            <span className="ml-4 text-dark font-medium">Balayage</span>
          </label>
        </div>

        <div className="flex flex-col gap-y-10 w-full mt-10">
          <label className="inline-flex items-center border-b border-border pb-5">
            <input
              type="checkbox"
              className="text-blue-600 h-5 w-5"
            />
            <span className="ml-4 text-dark font-semibold cursor-pointer">Nails (1)</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="text-blue-600 h-5 w-5"
            />
            <span className="ml-4 text-dark font-medium cursor-pointer">Manicure</span>
          </label>
        </div>
      </div>
    </>
  );
}

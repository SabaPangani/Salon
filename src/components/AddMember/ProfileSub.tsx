import Input from "../Input";

export default function ProfileSub() {
  const colors = ["#e4a6e6", "#e0b6e6", "#e1c6e6", "#e2d6e6", "#e3g6e6"];

  return (
    <>
      <div>
        <h1 className="text-dark font-semibold text-3xl mb-1">Profile</h1>
        <p className="text-gray font-medium">
          Manage your team members personal profile
        </p>
      </div>

      <form className="flex flex-row flex-wrap gap-x-5 gap-y-5">
        <div className="flex flex-col w-[350px]">
          <label className="font-medium text-dark">First name*</label>
          <Input type="text" placeholder="" onChange={() => {}} value="" />
        </div>
        <div className="flex flex-col w-[350px]">
          <label className="font-medium text-dark">Last name</label>
          <Input type="text" placeholder="" onChange={() => {}} value="" />
        </div>
        <div className="flex flex-col w-[350px]">
          <label className="font-medium text-dark">Email*</label>
          <Input type="text" placeholder="" onChange={() => {}} value="" />
        </div>
        <div className="flex flex-col w-[350px]">
          <label className="font-medium text-dark">Phone number</label>
          <Input type="text" placeholder="" onChange={() => {}} value="" />
        </div>

        <div className="flex flex-col gap-y-2 w-full border-b border-border pb-5">
          <label className="text-dark font-medium">Calendar colour</label>
          <ul className="flex flex-row gap-x-2">
            {colors.map((color, index) => (
              <li
                key={index}
                style={{ backgroundColor: color }}
                className="w-7 h-7 rounded-full"
              ></li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-dark">Job title*</label>
          <Input type="text" placeholder="" onChange={() => {}} value="" />
        </div>
      </form>
    </>
  );
}

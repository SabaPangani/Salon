import moment from "moment";
import { useEmployee } from "../hooks/useEmployee";
import { EmployeeType } from "../shared/EmployeeType";

const Toolbar = ({
  onToday,
  onBack,
  onNext,
  date,
  view,
  onViewChange,
  onAdd,
}: any) => {
  const formattedDate = moment(date).format("dddd, MMMM Do YYYY");
  const formattedView =
    view.charAt(0).toUpperCase() + view.slice(1).toLowerCase();

  const { employees } = useEmployee()!;
  return (
    <div className="flex items-center justify-between p-2 bg-white shadow-md">
      <div className="flex">
        <select className="p-1 border rounded mx-1">
          {employees.map((employee: EmployeeType) => (
            <option key={employee.id}>{employee.firstName}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center">
        <button onClick={onBack} className="p-1 mx-1"></button>
        <button onClick={onToday} className="p-1 mx-1">
          Today
        </button>
        <button onClick={onNext} className="p-1 mx-1"></button>
        <span className="p-1 mx-1"></span>
      </div>

      <div className="flex">
        <div className="relative inline-block">
          <button
            onClick={() => onViewChange("month")}
            className={`p-1 mx-1 ${view === "month" ? "text-blue-500" : ""}`}
          >
            Month
          </button>
          <button
            onClick={() => onViewChange("week")}
            className={`p-1 mx-1 ${view === "week" ? "text-blue-500" : ""}`}
          >
            Week
          </button>
          <button
            onClick={() => onViewChange("day")}
            className={`p-1 mx-1 ${view === "day" ? "text-blue-500" : ""}`}
          >
            Day
          </button>
        </div>
        <button
          onClick={onAdd}
          className="p-1 mx-1 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Toolbar;

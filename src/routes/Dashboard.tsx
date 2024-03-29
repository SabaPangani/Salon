import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  YAxis,
  Tooltip,
} from "recharts";
const data = [
  { name: "Monday 11Mar", sales: 500, appointments: 2500, value: 2500 },
  { name: "Thursday 12Mar", sales: 600, appointments: 2600, value: 2600 },
  { name: "Wednesday 13Mar", sales: 400, appointments: 2400, value: 2400, },
];
export default function Dashboard() {
  return (
    <div>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { name: "Monday", temp: 23 },
  { name: "Tuesday", temp: 20 },
  { name: "Wednesday", temp: 18 },
  { name: "Thursday", temp: 24 },
  { name: "Friday", temp: 32 },
];

function VizPage() {
  return (
    <main>
      <LineChart width={600} height={400} data={data} style={{ margin: "0 auto" }}>
        <Line type="monotone" dataKey="temp" stroke="#8884d8" strokeWidth={5} />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </main>
  );
}

export default VizPage;

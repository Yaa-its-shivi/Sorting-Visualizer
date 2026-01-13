import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


const CustomAreaChart = ({array}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={array.map((i, v) => ({ index: i, value: v }))}>
        <defs>
          <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#875cf5" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#875cf5" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="none" />
        <XAxis
          dataKey="index"
          tick={{ fontSize: 12, fill: "#555" }}
          stroke="none"
        ></XAxis>

        <YAxis tickCount={8} tick={{ fontSize: 12, fill: "#555" }} stroke="none"></YAxis>

        <Tooltip />
        <Area
          type="monotone"
          dataKey="index"
          stroke="#875cf5"
          fill="url(#incomeGradient)"
          strokeWidth={3}
          dot={{ r: 3, fill: "@ab8df8" }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};


export default CustomAreaChart;
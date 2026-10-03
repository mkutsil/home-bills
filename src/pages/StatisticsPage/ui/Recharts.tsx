import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsData } from '../model/types';

export const Recharts = ({ data }: { data: RechartsData }) => (
    <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }} responsive data={data}>
        <CartesianGrid />
        <Line dataKey="UAH" />
        <XAxis dataKey="name" />
        <YAxis width="auto" label={{ value: 'UAH', position: 'insideLeft', angle: -90 }} />
        <Legend />
        <Tooltip />
    </LineChart>
);

// import { RechartsDevtools } from '@recharts/devtools';

// const renderCustomAxisTick = ({ x, y, payload }: any) => {
//     switch (payload.value) {
//         case 'Page A':
//             return <Flame color="#FBBA74" x={x - 12} y={y + 4} width={24} height={24} />;

//         case 'Page B':
//             return <Zap color="#F3B923" x={x - 12} y={y + 4} width={24} height={24} />;

//         case 'Page C':
//             return <Droplets color="#3D6493" x={x - 12} y={y + 4} width={24} height={24} />;

//         default:
//             return <Flame x={x - 12} y={y + 4} width={24} height={24} />;
//     }
// };

{
    /* <LineChart
        style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
        responsive
        data={data}
        margin={{
            top: 20,
            right: 20,
            bottom: 5,
            left: 0,
        }}
    >
        <CartesianGrid strokeDasharray="5 5" />
        <Line type="monotone" dataKey="uv" strokeWidth={2} name="My data series name" />
        <XAxis dataKey="name" tick={renderCustomAxisTick} height={50} />
        <YAxis width="auto" label={{ value: 'UV', position: 'insideLeft', angle: -90 }} />
        <Legend position="insideBottomRight" />
        <Tooltip />
        <RechartsDevtools /> 
    </LineChart> */
}

import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../style/Board.css';

const data = [
  {
    name: 'Page A',
    kg: 4000,
    Kcal: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    kg: 3000,
    Kcal: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    kg: 2000,
    Kcal: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    kg: 2780,
    Kcal: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    kg: 1890,
    Kcal: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    kg: 2390,
    Kcal: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    kg: 3490,
    Kcal: 4300,
    amt: 2100,
  },
];


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltip">
        <p>{`${payload[0].value}kg`}</p>
				<p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};



export default class Graph1 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tickLine={false} tickSize="10" />
          <YAxis orientation='right' axisLine={false} tickLine={false} tickSize="30"/>
          <Tooltip width={50} content={<CustomTooltip />}/>
          <Bar dataKey="kg" fill="#282D30" radius={[30, 30, 0, 0]} barSize={10}/>
          <Bar dataKey="Kcal" fill="#E60000" radius={[30, 30, 0, 0]} barSize={10}/>

        </BarChart>
      </ResponsiveContainer>
    );
  }
}

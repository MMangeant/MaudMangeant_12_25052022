import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="kg" fill="#282D30" radius={[30, 30, 0, 0]} barSize={10}/>
          <Bar dataKey="Kcal" fill="#E60000" radius={[30, 30, 0, 0]} barSize={10}/>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

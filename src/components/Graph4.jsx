import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '40-49',
    uv: 8.63,
    pv: 3908,
    fill: '#E60000',
  }

];


// static demoUrl = 'https://codesandbox.io/s/simple-radial-bar-chart-qf8fz';

export default function Graph4() {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart cx="50%" cy="50%" innerRadius="100%" outerRadius="80%" barSize={15} data={data}>
        <RadialBar
          minAngle={15}
          background="white"
          clockWise
          dataKey="uv"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}



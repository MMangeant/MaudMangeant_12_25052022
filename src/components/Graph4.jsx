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

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

export default class Graph4 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radial-bar-chart-qf8fz';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="100%" outerRadius="80%" barSize={15} data={data}>
          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey="uv"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}

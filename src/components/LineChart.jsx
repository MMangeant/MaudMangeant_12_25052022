import React, { PureComponent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { getAverageUser } from '../services/service';

const dataB = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];



// static demoUrl = 'https://codesandbox.io/s/tiny-line-chart-r5z0f';

export default function Graph2() {


  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


    useEffect(() => {

      getAverageUser(id)
            .then(response => {
              setData(response)
              setLoading(true)
            })
    }, [id]);


    const average = data.sessions;

    console.log(average);


  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={300} height={100} data={average}>
        <Line type="natural"  dataKey="sessionLength" stroke="#fff" strokeWidth={2} dot={false} />
        <Tooltip width={20}  cursor={{ stroke: 'black', strokeOpacity: 0.1, strokeWidth: 100}} content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
    
  );
}


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip-LineChart">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

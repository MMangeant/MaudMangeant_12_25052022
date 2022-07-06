import React, { PureComponent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../style/Board.css';

import { getActivityUser } from '../services/service';



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


// static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';


export default function Graph1() {

  const formatXAxis = (tick) => {
		return tick + 1;
	};


  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


    useEffect(() => {

      getActivityUser(id)
            .then(response => {
              setData(response)
              setLoading(true)
            })
    }, [id]);


    const activity = data.sessions;


  return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={activity}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis tickFormatter={formatXAxis} tickLine={false} tickSize="10" />
          <YAxis orientation='right' axisLine={false} tickLine={false} tickSize="30"/>
          <Tooltip width={50} content={<CustomTooltip />}/>
          <Bar dataKey="kilogram" fill="#282D30" radius={[30, 30, 0, 0]} barSize={10}/>
          <Bar dataKey="calories" fill="#E60000" radius={[30, 30, 0, 0]} barSize={10}/>

        </BarChart>
      </ResponsiveContainer>
  );
}



import React, { PureComponent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Label } from 'recharts';

import { getActivityUser } from '../services/service';


/**
* Displaying the chart of daily activity, with the weight and the calories burned
* @return GraphBarChart
*/


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip-BarChart">
        <p>{`${payload[0].value}kg`}</p>
				<p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};

const CustomLegend = () => {
  return (
    <div className="legende-BarChart">
      <div>
        <h3>Activité quotidienne</h3>
        <div>
          
          <p><div className="rond grey"></div>Poids (kg)</p>
          
          <p><div className="rond red"></div>Calories brûlées (kCal)</p>
        </div>
      </div>
      <div className='separateur'></div>
    </div>
  );
};


export default function GraphBarChart() {

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
    <>
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
          <Legend content={<CustomLegend />} verticalAlign="top"/>
          <Tooltip width={50} content={<CustomTooltip />}/>
          <Bar dataKey="kilogram" fill="#282D30" radius={[30, 30, 0, 0]} barSize={10}/>
          <Bar dataKey="calories" fill="#E60000" radius={[30, 30, 0, 0]} barSize={10}/>

        </BarChart>
      </ResponsiveContainer>
    
    </>
  );
}



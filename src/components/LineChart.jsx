import React, { PureComponent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

import { getAverageUser } from '../services/service';


/**
* Displaying the chart of **average duration of sessions**
* @return Graph2
*/


const CustomLegend = () => {
  return (
    <div className="legende-LineChart">
      Durée moyenne <br/> des sessions
    </div>
  );
};


export default function Graph2() {
  
  const days = ["L", "M", "M", "J", "V", "S", "D"]

  const formatXAxis = (tick) => {
		return days[tick-1];
	};

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
   

  return (
    <>
    
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={average}>
          <Legend content={<CustomLegend />} verticalAlign="top"/>
          <XAxis
            dataKey="day"
            axisLine={false}
            stroke="#FFF"
            tickLine={false}
            tickFormatter={formatXAxis}
            padding={{ left: 10, right: 10, top: 50 }}
            />
          <Line type="monotone"  dataKey="sessionLength" stroke="#fff" strokeWidth={2} dot={false}/>
          <Tooltip width={20}  cursor={{ stroke: 'black', strokeOpacity: 0.1, strokeWidth: 100}} content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    
    </>
    
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

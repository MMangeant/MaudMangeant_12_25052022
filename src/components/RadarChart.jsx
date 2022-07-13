import React, { PureComponent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Legend, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import { getPerformanceUser } from '../services/service';

const dataB = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];



//  static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';


export default function Graph3() {

  const formatXAxis = (tick) => {
		return tick + 1;
	};


  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


    useEffect(() => {

      getPerformanceUser(id)
            .then(response => {
              setData(response)
              setLoading(true)
            })
    }, [id]);


    const performance = data;


  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performance}>
        <PolarGrid radialLines={false}/>
        <PolarAngleAxis dataKey="kind" tickLine={false} style={{fontSize: 10}} stroke="white"/>
        <Radar name="Mike" dataKey="A"  fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}


import React,{ useState }  from 'react';
// import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import { RadialBarChart  as Chart, RadialBar , PolarAngleAxis , ResponsiveContainer, Legend, Label} from 'recharts';




// static demoUrl = 'https://codesandbox.io/s/simple-radial-bar-chart-qf8fz';

export default function Graph4({data}) {


  let conditionScore = data[0].id === 18 ? 'score' : 'todayScore';
 

  const CustomLegend = () => {
    return (
      <div className='legende-RadialChart'>
      <div>{data[0].id === 18 ? data[0].score*100 : data[0].todayScore*100}%</div>
      <div>de votre <br/>objectif</div>
      </div>
    );
  };
  


  return (
    
   <>
    <div className='titleScore'>Score</div>
    <Chart
        width={258}
        height={263}
        innerRadius="70%"
        outerRadius="100%"
        data={data}
        barSize={15}
        startAngle={90}
        endAngle={470}>
        <RadialBar background cornerRadius={40} /* label={{ value: {scores}, fill: '#666', position: 'center' }} */ fill="#FF0101" 
          dataKey={conditionScore} >
        </RadialBar > 
        <Legend content={<CustomLegend />} verticalAlign='middle' align="middle"/>  
        <PolarAngleAxis
          type="number"
          domain={[0, 1]}
          tick={false}
        />
      </Chart>
   </>
  );
}


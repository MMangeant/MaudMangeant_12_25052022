import React,{ useState }  from 'react';
// import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import { RadialBarChart  as Chart, RadialBar , PolarAngleAxis , ResponsiveContainer} from 'recharts';



// static demoUrl = 'https://codesandbox.io/s/simple-radial-bar-chart-qf8fz';

export default function Graph4({data}) {
  
  console.log(data);

  // let scores;
  // if (data.id === 18) {
  //   scores = "score";
  // } else {
  //   scores = "todayScore";
  // }

  return (
    
    <ResponsiveContainer width="100%" height="100%">
      {/* <RadialBarChart cx="50%" cy="50%" innerRadius="100%" outerRadius="80%" barSize={15} data={dataB}>
        <RadialBar
          minAngle={15}
          background="white"
          clockWise
          dataKey="uv"
        />
      </RadialBarChart> */}
      {/* <PolarAngleAxis type="number"
          domain={[0, 1]}
          tick={false}  /> */}
      <Chart
        width={258}
        height={263}
        innerRadius="70%"
        outerRadius="100%"
        data={data}
        barSize={15}
        startAngle={90}
        endAngle={470}>
        <RadialBar cornerRadius={40} label={{ value: 'test', fill: '#666', position: 'center' }} fill="#FF0101" 
          dataKey={data.id = 18 ? "score" : "todayScore"} >
        </RadialBar >
        {/* <RadialBar cornerRadius={40} label={{ value: 'test', fill: '#666', position: 'center' }} fill="#FF0101" dataKey={scores} ></RadialBar > */}
        <PolarAngleAxis
          type="number"
          domain={[0, 1]}
          tick={false}
        />
      </Chart>
    </ResponsiveContainer>
  );
}



import React,{ useState, useEffect }  from 'react';
// import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import { RadialBarChart  as Chart, RadialBar , PolarAngleAxis , ResponsiveContainer} from 'recharts';

import { useParams } from 'react-router-dom';


export let userData = {
  "id": 18,
  "userInfos": {
    "firstName": 'Cecilio',
    "lastName": 'Ratorez',
    "age": 34,
  },
  "score": 0.3,
  "keyData": {
    "calorieCount": 2500,
    "proteinCount": 90,
    "carbohydrateCount": 150,
    "lipidCount": 120
  }
};


// static demoUrl = 'https://codesandbox.io/s/simple-radial-bar-chart-qf8fz';


export async function getInfosUser(id){
  let response = await fetch(`http://localhost:3000/user/${id}`)
  if(response.ok){
    let result = await response.json();
    return userData = result.data
  }
  return userData;
}


export default function Graph4() {
  


  // let scores;
  // if (data.id === 18) {
  //   scores = "score";
  // } else {
  //   scores = "todayScore";
  // }

  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


    useEffect(() => {

      getInfosUser(id)
            .then(response => {
              setData(response)
              setLoading(true)
            })
    }, [id]);

      console.log(data);

  return  (
    
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
          dataKey={data.id === 18 ? "score" : "todayScore"} >
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



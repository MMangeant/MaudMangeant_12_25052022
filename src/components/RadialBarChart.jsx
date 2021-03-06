import { RadialBarChart  as Chart, RadialBar , PolarAngleAxis , ResponsiveContainer, Legend, Label, Customized} from 'recharts';


/**
* Displaying the chart of **average score**
* @param data 
* @return GraphRadialChart
*/


export default function GraphRadialChart({data}) {

  let conditionScore = data[0].id === 18 ? 'score' : 'todayScore';
 
  const CustomLegend = () => {
    return (
      <div className='legende-RadialChart'>
      <div>{data[0].id === 18 ? data[0].score*100 : data[0].todayScore*100}%</div>
      <div>de votre <br/>objectif</div>
      <div className='titleScore'>Score</div>
      </div>
    );
  };

  return (
    
   <>
    <ResponsiveContainer>
    
    <Chart
        width={258}
        height={263}
        innerRadius="70%"
        outerRadius="100%"
        data={data}
        barSize={15}
        startAngle={90}
        endAngle={470}>
        <RadialBar background cornerRadius={40} fill="#FF0101" 
          dataKey={conditionScore} >
        </RadialBar > 
        <Legend content={<CustomLegend />} verticalAlign='middle' align="middle"/>  
        <Customized content={<CustomLegend />} verticalAlign='top' align="top"/>  
        <PolarAngleAxis
          type="number"
          domain={[0, 1]}
          tick={false}
        />
      </Chart>

    </ResponsiveContainer>
   </>
  );
}


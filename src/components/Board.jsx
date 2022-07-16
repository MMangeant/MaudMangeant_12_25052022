import '../style/style.css';
import Chiffres from './Chiffres';
import Graph1 from './BarChart';
import Graph2 from './LineChart';
import Graph3 from './RadarChart';
import Graph4 from './RadialBarChart';


import { getInfosUser, getActivityUser } from '../services/service';

import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// console.log(getInfosUser());

function Board() {

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


    // console.log(id);
    const profil = data.userInfos;
    const chiffres = data.keyData;
    // const score = data.todayScore;


    let conditionScore;
    if (data.id === 18) {
      conditionScore = "score";
    } else {
      conditionScore = "todayScore";
    }
    
  return (
    <div>
    {loading && 
      <>
      <section>
      <div id="board">
        <h1>Bonjour 
          <span> {profil.firstName}</span>
        </h1>
        <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        <div className='gridBoard'>
        
          <div className="graph1 graphs">
            <Graph1 />
          </div>
          <div className="graph2 graphs">
            {/* <div>Durée moyenne des <br />sessions</div> */}
            <Graph2 />
          </div>
          <div className="graph3 graphs">
            <Graph3 />
          </div>
          <div className="graph4 graphs">
            <Graph4 data={[data]}/>
          </div>
          <div className='gridChiffres'>
            <Chiffres data={chiffres}/>
          </div>
        </div>
      </div>
    </section>
  </>
  }
  {!loading &&
      <h1>Page en construction</h1>
  }
  </div>    
  );
}


export default Board;

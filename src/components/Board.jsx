import '../style/style.css';
import Chiffres from './Chiffres';
import GraphBarChart from './BarChart';
import GraphLineChart from './LineChart';
import GraphRadarChart from './RadarChart';
import GraphRadialChart from './RadialBarChart';

import { getInfosUser } from '../services/service';

import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


/**
* Displaying all the charts on the page
* @return Board
*/


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

    const profil = data.userInfos;
    const chiffres = data.keyData;

  return (
    <div>
    {loading && 
      <>
      <section>
      <div id="board">
        <h1>Bonjour 
          <span> {profil.firstName}</span>
        </h1>
        <div className="graph1 graphs">
            <GraphBarChart />
          </div>
        <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        <div className='gridBoard'>
        
          <div className="graph1 graphs">
            <GraphBarChart />
          </div>
          <div className="graph2 graphs">
            <GraphLineChart />
          </div>
          <div className="graph3 graphs">
            <GraphRadarChart />
          </div>
          <div className="graph4 graphs">
            <GraphRadialChart data={[data]}/>
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

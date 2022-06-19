import '../style/Board.css';
import Chiffres from './Chiffres';
import Graph1 from './Graph1';
import Graph2 from './Graph2';
import Graph3 from './Graph3';
import Graph4 from './Graph4';


import { getInfosUser } from '../services/service';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Board() {

  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(getInfosUser(id));


    useEffect(() => {

      getInfosUser(id)
            .then(response => {
              setData(response)
              setLoading(true)
            })
    }, [id]);

    console.log(data);
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
        <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        <div className='gridBoard'>
        
          <div className="graph1 graphs">
            <Graph1 />
          </div>
          <div className="graph2 graphs">
            <Graph2 />
          </div>
          <div className="graph3 graphs">
            <Graph3 />
          </div>
          <div className="graph4 graphs">
            <Graph4 />
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
      <h1>SALUT</h1>
  }
  </div>    
  );
}


export default Board;

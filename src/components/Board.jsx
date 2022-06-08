import '../style/Board.css';
import Chiffres from './Chiffres';
import Graph1 from './Graph1';
import Graph2 from './Graph2';
import Graph3 from './Graph3';
import Graph4 from './Graph4';

function Board() {
  return (
    <>
      <section>
        <div id="board">
          <h1>Bonjour <span>Toi</span></h1>
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
              <Chiffres />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}


export default Board;

import Aside from '../components/Aside';
import Board from '../components/Board';

function Home() {

  return (
    <>
      <div className='homePage'>
        <Aside />
        <Board />
      </div>
    </>
  );
}

export default Home;
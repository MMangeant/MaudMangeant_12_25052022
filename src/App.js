
import './App.css';

import Header from './components/Header';
import Aside from './components/Aside';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='ctnPage'>
        <Aside />
        <Board />
      </div>
    </div>
  );
}

export default App;


import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import User from './pages/User';
import Error from './pages/Error';


const App = () => {

  return (
  <React.StrictMode>
      <Router>
        <div className='App'>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='/user/:id' element={ <User /> } />
            <Route exact path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </React.StrictMode>
  )
}



export default App;


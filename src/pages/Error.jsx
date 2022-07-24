import { NavLink } from 'react-router-dom';
import cone from '../assets/cone.png';

function Error() {

  return (
    <>
      <div className='homePage'>
        <div>
          <img src={cone} className="imgError" alt="cone" />
          <h2>Page en construction</h2>
          <NavLink className='user' to='/'>Revenir à l'accueil</NavLink>
        </div>
      </div>
    </>
  );
}

export default Error;
import { NavLink } from 'react-router-dom';

function Home() {

  return (
    <>
      <div className='homePage'>
        <div>
          <h2>Quel profil voulez-vous voir ?</h2>
          <NavLink className='user' to='/user/12'>Karl</NavLink>
          <NavLink className='user' to='/user/18'>Cécilia</NavLink>
          <NavLink className='user' to='/user/15'>Gilbert</NavLink>
        </div>
      </div>
    </>
  );
}

export default Home;
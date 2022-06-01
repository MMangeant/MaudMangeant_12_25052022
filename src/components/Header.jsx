import logo from '../assets/logo.png';
import '../style/Header.css';

function Header() {
  return (
    <>
      <header>
        <img src={logo} className="logo" alt="logo" />

        <nav>
          <a href='/'>Accueil</a>
          <a href='/'>Profil</a>
          <a href='/'>Réglage</a>
          <a href='/'>Communauté</a>
        </nav>
        
      </header>
    </>
  );
}

export default Header;

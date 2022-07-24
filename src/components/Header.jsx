import logo from '../assets/logo.png';
import '../style/style.css';

function Header() {
  return (
    <>
      <header>
        <img src={logo} className="logo" alt="logo" />

        <nav>
          <a href='/'>Accueil</a>
          <a href='/'>Profil</a>
          <a href='/reglage'>Réglage</a>
          <a href='/community'>Communauté</a>
        </nav>
        
      </header>
    </>
  );
}

export default Header;

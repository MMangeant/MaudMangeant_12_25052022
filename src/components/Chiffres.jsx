import picto1 from '../assets/calories-icon.png';
import picto2 from '../assets/protein-icon.png';
import picto3 from '../assets/carbs-icon.png';
import picto4 from '../assets/fat-icon.png';
import '../style/Chiffres.css';

function Chiffres() {
  return (
    <>
      <div className='gridChiffres'>

        <div className="chiffre1 chiffres">
          <img src={picto1} className="icon" alt="icon" />
          <div class="nombres">
            <div class="value">1,930kCal</div>
            <div class="label">Calories</div>
          </div>
        </div>

        <div className="chiffre2 chiffres">
          <img src={picto2} className="icon" alt="icon" />
          <div class="nombres">
            <div class="value">155g</div>
            <div class="label">Protéines</div>
          </div>
        </div>

        <div className="chiffre3 chiffres">
          <img src={picto3} className="icon" alt="icon" />
          <div class="nombres">
            <div class="value">290g</div>
            <div class="label">Glucides</div>
          </div>
        </div>

        <div className="chiffre4 chiffres">
          <img src={picto4} className="icon" alt="icon" />
          <div class="nombres">
            <div class="value">50g</div>
            <div class="label">Lipides</div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Chiffres;

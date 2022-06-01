import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import '../style/Aside.css';

function Aside() {
  return (
    <>
      <aside>
        <div>
          <img src={icon1} className="icon" alt="icon" />
          <img src={icon2} className="icon" alt="icon" />
          <img src={icon3} className="icon" alt="icon" />
          <img src={icon4} className="icon" alt="icon" />
        </div>
        
      </aside>
    </>
  );
}

export default Aside;

import icons from '../assets/icons.svg';
import '../style/Aside.css';

function Aside() {
  return (
    <>
      <aside>
        <div>
          <img src={icons} className="icon" alt="icon" />
          <span>Copyright, SportSee 2020</span>
        </div>
        
      </aside>
    </>
  );
}

export default Aside;

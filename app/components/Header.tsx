
import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
  return (
    <div>
      <div>
         <div className="accordion">
        <input type="checkbox" id="acc1" className="acc-toggle" />

        <label htmlFor="acc1" className="acc-header">
          Accordion Başlıq
        </label>

        <div className="acc-body">
          <p></p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;

import { RiDownloadLine } from "react-icons/ri";
import DataBox from "../components/swiper/DataBox";
import { FaToggleOff } from "react-icons/fa";

const Service = () => {
  return (
    <div className="h-100">
      <label className="toggle-label">
        <input type="checkbox" className=" hidden  " />
      </label> <br />
      <label className="">
        <input type="radio" />
      </label>
    </div>
  );
};

export default Service;

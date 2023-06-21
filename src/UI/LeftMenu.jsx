import { Link } from "react-router-dom";
import "../styles/LeftMenu.css";

const LeftMenu = (props) => {
  return (
    <div className="menu">
      {props.arr.map((el) => (
        <Link className="a" to={el.path} key={el.path} activeclassname="active">
          {el.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftMenu;

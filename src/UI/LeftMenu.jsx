import { Link } from "react-router-dom";
import "../styles/LeftMenu.css";
import { ABOUT_ROUTES } from "../utils/consts";

const LeftMenu = () => {
  return (
    <div className="menu">
      {ABOUT_ROUTES.map((el) => (
        <Link className="a" to={el.path} key={el.path} activeclassname="active">
          {el.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftMenu;

// const [isSticky, setIsSticky] = useState(false);
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleScroll = () => {
//     const height = window.innerHeight;
//     const scrollTop = window.scrollY || document.documentElement.scrollTop;
//     if (scrollTop > height / 3) {
//       setIsSticky(true);
//     } else {
//       setIsSticky(false);
//     }
//   };

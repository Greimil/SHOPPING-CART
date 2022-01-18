import { Link } from "react-router-dom";

const NavbarGeneral = (props) => {
    return (
    <nav className="barraHome">
      <h1 className="headerText">Aesthetic Shop</h1> <Link to="/">Inicio</Link>
      <Link to="/Shop">Productos</Link>
    </nav>
  );
};


export default NavbarGeneral
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { DataContext } from './context/DataContext';
import { useContext } from "react";
import { openCart } from "./funciones";
const Navbar = (props) => {
  
    const {carritoCount} = useContext(DataContext)

    return (
    <nav className="barraHome">
      <h1 className="headerText">Aesthetic Shop</h1> <Link to="/">Inicio</Link>
      <Link to="/Shop">Productos</Link>
      <Link to="" onClick={()=>{
          openCart()
      }} ><ShoppingCartIcon/>{carritoCount}</Link>
    </nav>
  );
};


export default Navbar
import ClavosCadena from "../imgs/descarga.png";
import NavbarGeneral from "./NavbarGeneral";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage"  >
      <NavbarGeneral />

      <div className="centralInfo">
        {" "}
        <div className="bienvenida">
          <h2>Somos la tienda lider accessorios Aesthetic en el pais</h2>{" "}
          <p>
            Aprovecha las ofertas de black Friday y conviertete en un verdadero
            RockStar!
          </p>{" "}
          <Link to="/shop"> <button className="btnVerCatalago">
            Ver catalogo
          </button></Link>{" "}
        </div>{" "}
        <img className="clavoImg" src={ClavosCadena} alt="Cadena-clavos"></img>{" "}
      </div>

      <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000"
          fill-opacity="1"
          d="M0,288L48,245.3C96,203,192,117,288,69.3C384,21,480,11,576,26.7C672,43,768,85,864,128C960,171,1056,213,1152,197.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <footer>Create by: Greimil Nuñez </footer>
    </div>
  );
};

export default HomePage;

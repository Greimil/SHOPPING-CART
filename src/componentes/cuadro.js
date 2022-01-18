import {
  ApplyStyle,
  RemoveStyle,
  AdditemTocart,
} from "./funciones";
import { useContext } from "react";
import { DataContext } from "./context/DataContext";

const Cuadro = (props) => {
  let { btnID, precio, nombre, id, link } = props;

  const {
    data,
    setData,
    carritoCount,
    setcarritoCount,
    vC1,
    setC1,
    vA1,
    setA1,
    vA2,
    setA2,
    vC2,
    setC2,
    vC3,
    setC3,
    vA3,
    setA3,
    vA4,
    setA4,
    vP1,
    setP1,
    vP2,
    setP2,
    vAN1,
    setAN1,
    vAN2,
    setAN2,
    vC4,
    setC4,
    total, 
    setTotal, 
    inicialPrice, setInicialPrice
  
  } = useContext(DataContext);


  



  let setVisibilidad;
  let visibilidad;

  switch (id) {
    case "C1":
      setVisibilidad = setC1;
      visibilidad = vC1;
      break;

    case "A1":
      setVisibilidad = setA1;
      visibilidad = vA1;
      break;

    case "A2":
      setVisibilidad = setA2;
      visibilidad = vA2;
      break;

    case "C2":
      setVisibilidad = setC2;
      visibilidad = vC2;
      break;

    case "C3":
      setVisibilidad = setC3;
      visibilidad = vC3;
      break;

    case "A3":
      setVisibilidad = setA3;
      visibilidad = vA3;
      break;

    case "A4":
      setVisibilidad = setA4;
      visibilidad = vA4;
      break;

    case "P1":
      setVisibilidad = setP1;
      visibilidad = vP1;
      break;
    case "P2":
      setVisibilidad = setP2;
      visibilidad = vP2;
      break;
    case "AN1":
      setVisibilidad = setAN1;
      visibilidad = vAN1;
      break;

    case "AN2":
      setVisibilidad = setAN2;
      visibilidad = vAN2;
      break;

    case "C4":
      setVisibilidad = setC4;
      visibilidad = vC4;
      break;

    default:
  }


  return (
    <div
      className="ContentParentFoto"

    >
      <div className="CuadroInfoFoto" id={id} onClick={() => {
          setData(
            data.concat({
              nombre: nombre,
              precio: precio,
              imgLink: link,
              btnID,
            })
          );
          setcarritoCount(carritoCount + 1);
          setTotal(total + precio)
          AdditemTocart(id, setVisibilidad, visibilidad);
        }}  >
        <img src={link} className="ProductoFoto" alt={nombre}></img>
        <h3 className="precioH3">{`$${precio}`}</h3>
      </div>
    </div>
  );
};

export { Cuadro };

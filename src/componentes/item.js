import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "./context/DataContext";
import DeleteIcon from '@mui/icons-material/Delete';

const Item = (props) => {
  const { total, setTotal, carritoCount, setcarritoCount } = useContext(DataContext);
  let { nombre, src, precio, setVisibilidad  } = props;
  let [cantidad, setCantidad] = useState(1);

  const incrementar = (cantidad, setCantidad) => {
    
    setcarritoCount(carritoCount + 1)
    setCantidad(cantidad + 1);
    // precio = precio * cantidad;
    setTotal(precio + total)

};

  const decrementar = (cantidad, setCantidad) => {
    if (cantidad > 0) {
        setcarritoCount(carritoCount - 1)
        setCantidad(cantidad - 1);
        setTotal(total - precio)
    }  
    
  };

  let subtotal = cantidad * precio;
  subtotal = subtotal.toFixed(2)
 

//   console.log( total);

  return (
    <div className="itemtoBuy">
      <div className="izquierda">
        <img className="tumbanail" src={src} alt="ProductoItem"></img>
        <div className="nombreymas">
          <h6>{nombre}</h6>
          <div className="increaseDecrease">
            <button
              className="decrease"
              onClick={() => {
                decrementar(cantidad, setCantidad);
                // setTotal(subtotal)
            }}
            >
              {" "}
              -{" "}
            </button>
            <input
              value={cantidad}
              className="inputCantidad"
              type="number"
            ></input>
            <button
              className="increase"
              onClick={() => {
                incrementar(cantidad, setCantidad);
                // setTotal(subtotal) 
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="derecha">
        <h3>{`$${subtotal}`}</h3>
        <DeleteIcon className="DeleteIcon" onClick={()=>{
            setVisibilidad(false) 
            setTotal(total - subtotal)
            if(cantidad === 0) {

            } else {
                setcarritoCount(carritoCount - 1) 

            }
        }}  />
      </div>
    </div>
  );
};

export default Item;

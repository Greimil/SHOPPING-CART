import { useContext } from "react";
import { DataContext } from "./context/DataContext";
import CloseIcon from "@mui/icons-material/Close";
import { closeCart } from "./funciones";
import Item from "./item";
import { Link } from "react-router-dom";

const Carrito = (props) => {
  const {
    carritoCount,
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
    setcarritoCount,
  } = useContext(DataContext);

  return (
    <div className="Cart">
      <div className="cartSpace">
        <CloseIcon
          className="closeIcon"
          onClick={() => {
            closeCart();
          }}
        />
      </div>

      <div className="divWithScroll">
        {vC1 ? (
          <Item
            src="https://i.pinimg.com/736x/2a/1f/82/2a1f8252cb46c73d381083871e40b685.jpg"
            precio={3.5}
            nombre="Collar Con Candado"
            Visibilidad={vC1}
            setVisibilidad={setC1}
          />
        ) : null}
        {vA1 ? (
          <Item
            src="https://i.pinimg.com/564x/a1/54/28/a15428e6aee8f03bdffdea5227825fbe.jpg"
            precio={1.5}
            nombre="Aretes puntiagudos"
            Visibilidad={vA1}
            setVisibilidad={setA1}
          />
        ) : null}
        {vA2 ? (
          <Item
            src="https://i.pinimg.com/564x/08/a8/c9/08a8c9dd9751eeb98e92c6659f8a7899.jpg"
            precio={2.0}
            nombre="Aretes de Cruz (cortos)"
            Visibilidad={vA2}
            setVisibilidad={setA2}
          />
        ) : null}
        {vC2 ? (
          <Item
            src="https://i.pinimg.com/564x/4c/f7/d0/4cf7d0783ebfd169d221d574e7d79198.jpg"
            precio={4.99}
            nombre="Collar Con Cruz"
            Visibilidad={vC2}
            setVisibilidad={setC2}
          />
        ) : null}
        {vC3 ? (
          <Item
            src="https://i.pinimg.com/564x/54/16/ee/5416ee786a6aa9d55897320e7b019576.jpg"
            precio={3.0}
            nombre="Collar con Cuchillo"
            Visibilidad={vC3}
            setVisibilidad={setC3}
          />
        ) : null}

        {vC1 === false &&
        vA1 === false &&
        vA2 === false &&
        vC2 === false &&
        vC3 === false &&
        vA3 === false &&
        vA4 === false &&
        vP1 === false &&
        vP2 === false &&
        vAN1 === false &&
        vAN2 === false &&
        vC4 === false ? (
          <h1 className="emptyCart">Tu carrito esta vacio </h1>
        ) : null}

        {vA3 ? (
          <Item
            src="https://i.pinimg.com/564x/63/c9/4b/63c94bb245d473994692b495a0bd71d2.jpg"
            precio={2.3}
            nombre="Aretes de Hacha"
            Visibilidad={vA3}
            setVisibilidad={setA3}
          />
        ) : null}
        {vA4 ? (
          <Item
            src="https://i.pinimg.com/564x/20/25/2d/20252de7f3346802d8f3c53ff094f575.jpg"
            precio={3.0}
            nombre="Aretes de Cruz (Largos)"
            Visibilidad={vA4}
            setVisibilidad={setA4}
          />
        ) : null}
        {vP1 ? (
          <Item
            src="https://i.pinimg.com/564x/cd/96/d6/cd96d6148da2d09a3a184a45570b3655.jpg"
            precio={3.5}
            nombre="Pulsera metalica Escorpion"
            Visibilidad={vP1}
            setVisibilidad={setP1}
          />
        ) : null}
        {vP2 ? (
          <Item
            src="https://i.pinimg.com/564x/bb/65/75/bb65757409097fd6740b4adb9a1e4f32.jpg"
            precio={2.4}
            nombre="Pulsera de piedras volcanicas"
            Visibilidad={vP2}
            setVisibilidad={setP2}
          />
        ) : null}
        {vAN1 ? (
          <Item
            src="https://i.pinimg.com/736x/5d/fb/a1/5dfba140492efcc90a54ba84c69d6857.jpg"
            precio={6.3}
            nombre="Anillo con Aro Metalico (rugoso)"
            Visibilidad={vAN1}
            setVisibilidad={setAN1}
          />
        ) : null}
        {vAN2 ? (
          <Item
            src="https://i.pinimg.com/564x/d6/ba/ef/d6baefedfba6f765aa3a76ccaf9c87f1.jpg"
            precio={5.0}
            nombre="Anillo con aro metalico (lizo)"
            Visibilidad={vAN2}
            setVisibilidad={setAN2}
          />
        ) : null}
        {vC4 ? (
          <Item
            src="https://i.pinimg.com/564x/a0/30/2d/a0302d8f9fc014bc40569e18bed78a1e.jpg"
            precio={4.25}
            nombre="Collar con doble dige"
            Visibilidad={vC4}
            setVisibilidad={setC4}
          />
        ) : null}
      </div>

      <div className="efectuarcompratotal">
        {vC1 === false &&
        vA1 === false &&
        vA2 === false &&
        vC2 === false &&
        vC3 === false &&
        vA3 === false &&
        vA4 === false &&
        vP1 === false &&
        vP2 === false &&
        vAN1 === false &&
        vAN2 === false &&
        vC4 === false
        ? null : (
          <Link to="/gracias">
            {" "}
            <button
              onClick={() => {
                setTotal(total - total);
                setcarritoCount(carritoCount - carritoCount);
                setC1(false);

                setA1(false);

                setA2(false);

                setC2(false);

                setC3(false);

                setA3(false);

                setA4(false);

                setP1(false);

                setP2(false);

                setAN1(false);
                setAN2(false);
                setC4(false);
              }}
            >
              Efectuar compra
            </button>{" "}
          </Link>
        )}

        <h2>total: {`$${total.toFixed(2)}`} </h2>
      </div>
    </div>
  );
};

export default Carrito;

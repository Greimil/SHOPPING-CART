import { Cuadro } from "./cuadro";
import Navbar from "./navbar";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import  Carrito  from "./carrito";


const Shop = () => {
  
  

  return (
    <div>
      <Navbar />

      
      <Carrito/>

      <main className="mainShop">
        <Cuadro
          link="https://i.pinimg.com/736x/2a/1f/82/2a1f8252cb46c73d381083871e40b685.jpg"
          precio={3.50}
          nombre="Collar Con Candado"
          id="C1"
          btnID="1"
        />
        <Cuadro
          link="https://i.pinimg.com/564x/a1/54/28/a15428e6aee8f03bdffdea5227825fbe.jpg"
          precio={1.50}
          nombre="Aretes puntiagudos"
          id="A1"
          btnID="2"
        />
        <Cuadro
          link="https://i.pinimg.com/564x/08/a8/c9/08a8c9dd9751eeb98e92c6659f8a7899.jpg"
          precio={2.00}
          nombre="Aretes de Cruz (cortos)"
          id="A2"
          btnID="3"
        />
        <Cuadro
          link="https://i.pinimg.com/564x/4c/f7/d0/4cf7d0783ebfd169d221d574e7d79198.jpg"
          precio={4.99}
          nombre="Collar Con Cruz"
          id="C2"
          btnID="4"
        />
        <Cuadro
          link="https://i.pinimg.com/564x/54/16/ee/5416ee786a6aa9d55897320e7b019576.jpg"
          precio={3.00}
          nombre="Collar con Cuchillo"
          id="C3"
          btnID="5"
        />
        <Cuadro
          link="https://i.pinimg.com/564x/63/c9/4b/63c94bb245d473994692b495a0bd71d2.jpg"
          precio={2.30}
          nombre="Aretes de Hacha"
          id="A3"
          btnID="6"
        />
        <Cuadro
          link="https://i.pinimg.com/564x/20/25/2d/20252de7f3346802d8f3c53ff094f575.jpg"
          precio={3.00}
          nombre="Aretes de Cruz (Largos)"
          id="A4"
          btnID="7"
        />

        <Cuadro
          link="https://i.pinimg.com/564x/cd/96/d6/cd96d6148da2d09a3a184a45570b3655.jpg"
          precio={3.50}
          nombre="Pulsera metalica Escorpion"
          id="P1"
          btnID="8"
        />
        <Cuadro
          link="https://i.pinimg.com/564x/bb/65/75/bb65757409097fd6740b4adb9a1e4f32.jpg"
          precio={2.40}
          nombre="Pulsera de piedras volcanicas"
          id="P2"
          btnID="9"
        />
        <Cuadro
          link="https://i.pinimg.com/736x/5d/fb/a1/5dfba140492efcc90a54ba84c69d6857.jpg"
          precio={6.30}
          nombre="Anillo con Aro Metalico (rugoso)"
          id="AN1"
          btnID="10"
        />
        <Cuadro
          link="https://i.pinimg.com/564x/d6/ba/ef/d6baefedfba6f765aa3a76ccaf9c87f1.jpg"
          precio={5.00}
          nombre="Anillo con aro metalico (lizo)"
          id="AN2"
          btnID="11"
        />
        <Cuadro
          link="https://i.pinimg.com/564x/a0/30/2d/a0302d8f9fc014bc40569e18bed78a1e.jpg"
          precio={4.25}
          nombre="Collar con doble dige"
          id="C4"
          btnID="12"
        />
      </main>
      <div className="fakeNavbar">
        <div className="fakeNavbarInside">
          <ArrowLeftIcon />
          <div className="divNumber">1</div>
          <div className="divNumber">2</div> <div className="divNumber">3</div>{" "}
          <div className="divNumber">4</div> <div className="divNumber">5</div>{" "}
          <div className="divNumber">6</div> <div className="divNumber">7</div>{" "}
          <div className="divNumber">8</div> <div className="divNumber">9</div>{" "}
          <div className="divNumber">10</div> <ArrowRightIcon />{" "}
        </div>
      </div>
    </div>
  );
};

export default Shop;



const AddToCar = (setcarritoCount, carritoCount) => {
  setcarritoCount(carritoCount + 1);
};


const AdditemTocart = (Id, setVisibilidad, visibilidad) => {
  setVisibilidad(visibilidad = true)

}


const openCart = () => {
  let carrito = document.querySelector(".Cart")
  let mainShop = document.querySelector(".mainShop")
  
  mainShop.style.pointerEvents = "none"
  mainShop.style.filter= "blur(5px)"
  carrito.style.display = "block"

}


const closeCart = ()=> {
  let carrito = document.querySelector(".Cart")
  let mainShop = document.querySelector(".mainShop")

  mainShop.style.pointerEvents = "auto"
  mainShop.style.filter= "blur(0px)"
  carrito.style.display = "none"
}


export { AddToCar, openCart , closeCart, AdditemTocart};

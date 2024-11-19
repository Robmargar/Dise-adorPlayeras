import { useState } from "react";
const desplazamiento = 2;

const [margin, setMargin] = useState({
  marginY: 25,
  marginX: 31,
});

export function moverArriba() {
  const newMargin = {
    ...margin,
    marginY: margin.marginY - desplazamiento,
  };
  setMargin(newMargin);
}

export function moverAbajo() {
  const newMargin = {
    ...margin,
    marginY: margin.marginY + desplazamiento,
  };
  setMargin(newMargin);
}

export function moverDerecha() {
  const newMargin = {
    ...margin,
    marginX: margin.marginX + desplazamiento,
  };
  setMargin(newMargin);
}

export function moverIzq() {
  const newMargin = {
    ...margin,
    marginX: margin.marginX - desplazamiento,
  };
  setMargin(newMargin);
}

export function ChangePosition(e) {
  console.log(e.target.name);
  let position = document.getElementById("Img-Personal");
  switch (e.target.name) {
    case "arriba":
      moverArriba();
      position.style.marginTop = margin.marginY + "%";
      break;
    case "bajar":
      moverAbajo();
      position.style.marginTop = margin.marginY + "%";
      break;
    case "izq":
      moverIzq();
      position.style.marginLeft = margin.marginX + "%";
      break;
    case "der":
      moverDerecha();
      position.style.marginLeft = margin.marginX + "%";
      break;

    case "centrar":
      position.style.margin = "25% 31%";
      break;

    case "sup-izq":
      position.style.margin = "25% 31%";
      break;

    case "sup-der":
      position.style.margin = "25% 31%";
      break;

    case "inf-izq":
      position.style.margin = "25% 31%";
      break;

    case "inf-der":
      position.style.margin = "25% 31%";
      break;
  }
}

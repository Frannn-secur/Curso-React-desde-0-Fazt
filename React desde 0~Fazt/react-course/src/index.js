import React from "react";
import ReactDOM from "react-dom/client";
// import { Saludar, UserCard } from "./Saludar";
// import Product, { NavBar } from "./Product";
// import {Boton} from "./Boton";
// import {Tarea} from "./Tarea"
// import {Salut} from "./Salut"
import {Post} from "./Posts"

const rootElement = ReactDOM.createRoot(document.querySelector("#root"));
// const handleChange = (event) => {
//   console.log(event.target.value);
// }

rootElement.render(
  <>
    <Post/>
  </>
);

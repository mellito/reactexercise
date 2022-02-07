import React from "react";
import ReactDOM from "react-dom";

// import "./toursapp/index.css";
// import "./reviewsapp/index.css";
// import "./accordionapp/index.css";
import "./colorgenerator/index.css";

//ejercicio1
// import Reviews from "./reviewsapp/App.js";

//ejercicio2
// import App2 from "./toursapp/App.js";

//ejercicio3
// import Accordion from "./accordionapp/App";

//menu
import Menu from "./colorgenerator/App";

ReactDOM.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>,
  document.getElementById("root")
);

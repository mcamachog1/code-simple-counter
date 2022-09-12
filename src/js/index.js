//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 995;


setInterval(()=>
{
    counter++
    let textcounter = counter.toString().padStart(6, '0')
    ReactDOM.render(<Home counter={textcounter}/>, document.querySelector("#app"));}
,1000)


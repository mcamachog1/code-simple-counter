import React from "react";
import Celda from "./celda";
import Reloj from "./reloj"


//create your first component
const Home = (props) => {
	return (
		<div className = "d-flex justify-content-center mt-5">
			<Reloj />
			<Celda counter={props.counter}  index = "0"/>
			<Celda counter={props.counter}  index = "1"/>
			<Celda counter={props.counter}  index = "2"/>
			<Celda counter={props.counter}  index = "3"/>
			<Celda counter={props.counter}  index = "4"/>
			<Celda counter={props.counter}  index = "5"/>

	

		</div>

		
	);
};

export default Home;

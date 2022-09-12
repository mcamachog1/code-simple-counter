import React from "react";

const Celda = (props)=>{
    return(
    <div className="celda">
        {props.counter[props.index]}
    </div>
    )
}

export default Celda
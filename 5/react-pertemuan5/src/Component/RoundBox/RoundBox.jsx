import React from 'react';


const RoundBox = (props) =>{
    return(
        <div className="round-box">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    );
}

export default RoundBox;
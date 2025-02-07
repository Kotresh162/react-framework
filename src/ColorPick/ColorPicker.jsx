import React,{useState} from "react";
import "./ColorPick.css"

function ColorPicker(){

    const [color,setColor]=useState("#ffffff");

    function handleColor(event){
        setColor(event.target.value);
    }

    return (<div className="color-container">
        <h2>Color picker</h2>
        <div className="color-display-box" style={{backgroundColor:color}}>
            <p>Present Color: {color}</p>
        </div>
        <label >select color:</label>
        <input type="color" value={color} onChange={handleColor} />
    </div>);
}

export default ColorPicker;
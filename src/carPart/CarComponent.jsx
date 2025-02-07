import React, { useState } from "react";

function CarComponent() {
    const [car, setCar] = useState([]);
    const [caryear, setCarYear] = useState(new Date().getFullYear());
    const [carmake, setCarMake] = useState("");
    const [carmodel, setCarModel] = useState("");

    function handlechangeyear(event) {
        setCarYear(Number(event.target.value)); // Convert to number
    }
    function handlechangemake(event) {
        setCarMake(event.target.value);
    }
    function handlechangemodel(event) {
        setCarModel(event.target.value);
    }

    function addCar() {
        setCar([...car, { year: caryear, make: carmake, model: carmodel }]);
        setCarYear(new Date().getFullYear()); // Reset after adding
        setCarMake("");
        setCarModel("");
    }

    return (
        <>
            <h2>Car details:</h2>
            <input type="number" value={caryear} onChange={handlechangeyear} /> <br />
            <input type="text" value={carmake} onChange={handlechangemake} placeholder="Enter car maker" /> <br />
            <input type="text" value={carmodel} onChange={handlechangemodel} placeholder="Enter car model" /> <br />
            <button onClick={addCar}>Add Car</button>
            
            <ul>
                {car.map((c, index) => (
                    <li key={index}>
                        {c.year} - {c.make} - {c.model}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default CarComponent;

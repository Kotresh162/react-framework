import React,{useState} from "react";
export default function Component(){
    const [name, setName] = useState("Guest");
    const [payment,setPayment]=useState("");
    const [shipping,setShipping]=useState("");
    function hacdleclick(event){
        setName(event.target.value);
    }
    function handlepyment(event){
        setPayment(event.target.value);
    }
    function hadleShipping(event){
        setShipping(event.target.value);
    }
    return (<div>
        <input value={name} type="text" onChange={hacdleclick}/>
        <p>Name : {name}</p>
        <select value={payment} onChange={handlepyment}>
            <option value="">select an option</option>
            <option value="visa">Visa</option>
            <option value="masterCard">masterCard</option>
        </select>
        <p>card Payment : {payment}</p>

        <label>
            <input type="radio" value="pickUp" checked={shipping==="pickUp"} onChange={hadleShipping}/>
            pickUp
        </label> <br />
        <label>
            <input type="radio" value="delivery" checked={shipping==="delivery"} onChange={hadleShipping}/>
            delivery
        </label> 
        <p>status:{shipping}</p>

    </div>);
}
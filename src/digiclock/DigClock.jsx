import React,{useState ,useEffect} from "react";
import "./digi.css"

export default function DigiClock(){

    const [time,setTime] = useState(new Date);
    
    useEffect(()=>{
        const intrevalId = setInterval(() => {
            setTime(new Date);
        }, 1000);

        return () =>{
            clearInterval(intrevalId);
        }
    },[])

    function formattime(){
        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();

        const meridian = hour >= 12 ? "PM" : "AM";
        hour = hour % 12 || 12;
        return `${padZero(hour)}:${padZero(minute)}:${padZero(second)}  ${meridian}`;
    }

    function padZero(number){
        return (number < 10 ? '0' : '') + number;
    }


    return (
    <div className="container">
        <div className="box">
            <span>{formattime()}</span>
        </div>
        
    </div>
    );
}
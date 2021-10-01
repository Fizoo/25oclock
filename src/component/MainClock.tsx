import React, {useState} from 'react';
import {LengthSession} from "./LengthSession";
import Timer from "./Timer";
import ButtonControl from "./ButtonControl";
import {log} from "util";

export const MainClock:React.FC = () => {

    const [sec, setSec] = useState(5)
    const [min, setMin] = useState(25)
    const [isStart,setStart]=useState(false)
    const [isStyle,setStyle]=useState(false)
    const [breakValue, setBreakValue] = useState(5)
    const [sessionValue, setSessionValue] = useState(25);

    const reset=()=>{
        setStart(false)
        setMin(25)
        setSec(0)
        setBreakValue(5)
        setSessionValue(25)
    }

    console.log("main clock")
    return (
        <>

            <LengthSession
                min={min}
                sec={sec}
                isStart={isStart}
                setMin={setMin}
                setStyle={setStyle}
                setSec={setSec}
                breakValue={breakValue}
                sessionValue={sessionValue}
                setSessionValue={setSessionValue}
                setBreakValue={setBreakValue}/>
            <Timer
                sec={sec}
                min={min}
                isStyle={isStyle}/>
            <ButtonControl
                reset={reset}
                setStart={setStart}/>
        </>
    );
}


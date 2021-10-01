import React from 'react';
import cn from "classnames";
import s from "./clock.module.css";

interface PropsType {
    min:number
    sec:number
    isStyle:boolean
}

const Timer:React.FC<PropsType> = ({min,sec,isStyle}) => {
    return (
        <div className={cn(s.timer,{[s.redStyle]:isStyle})}>
            <p>Session</p>
            <div>{min}:{sec.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}</div>
        </div>
    );
};

export default Timer;

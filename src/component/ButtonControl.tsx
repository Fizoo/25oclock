import React, {Dispatch} from 'react';
import s from "./clock.module.css";
import {PauseCircleFilled, PlayCircleFilled, RedoOutlined} from "@ant-design/icons";

interface PropsType {
    setStart:Dispatch<React.SetStateAction<boolean>>
    reset:()=>void
}

const ButtonControl:React.FC<PropsType> = ({setStart,reset}) => {

    console.log('button')

    return (
        <div className={s.buttonControl}>
            <button onClick={()=>setStart(true)}><PlayCircleFilled/></button>
            <button onClick={()=>setStart(false)}><PauseCircleFilled/></button>
            <button onClick={reset}><RedoOutlined/></button>
        </div>
    );
};

export default ButtonControl;

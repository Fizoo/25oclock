import React, {Dispatch, useEffect, useState} from 'react';
import s from "./clock.module.css";
import {CaretDownFilled, CaretUpFilled} from "@ant-design/icons";



interface PropsType {
    min:number
    sec:number
    breakValue:number
    sessionValue:number
    isStart:boolean
    setMin: Dispatch<React.SetStateAction<number>>
    setSec:Dispatch<React.SetStateAction<number>>
    setBreakValue:Dispatch<React.SetStateAction<number>>
    setSessionValue:Dispatch<React.SetStateAction<number>>
    setStyle:Dispatch<React.SetStateAction<boolean>>
}

export const LengthSession:React.FC<PropsType> = ({min,
                                                      sec,
                                                      isStart,
                                                      setMin,setStyle,
                                                      setSec,
                                                      breakValue,
                                                      sessionValue,
                                                      setSessionValue,
                                                      setBreakValue}) => {

    useEffect(() => {

        if(min<=breakValue){
            setStyle(true)
        }
        else {
            setStyle(false)
        }
        if(min===0&&isStart){
            const htmlaudio: HTMLAudioElement = new Audio('https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav')
            htmlaudio.play()
        }
    }, [min]);

    useEffect(() => {
        if(isStart){
            if(sec===59){
                setMin(prev=>prev-1)
            }
        }
    }, [sec]);

    useEffect(() => {
        let interval:any=null
        if(isStart){

            interval =setInterval(()=>{
                setSec(prev=>prev===0?59:prev-1)
            },1000)
        }
        else {
            clearInterval(interval)
        }
        return ()=>clearInterval(interval)
    }, [isStart]);

    const downSesLength = () => {
        setMin(prev=>prev>0?prev-1:1)
        setSessionValue(prev=>prev-1)
    };

    const upSesLength = () => {
        setMin(prev=>prev<60?prev+1:59)
        setSessionValue(prev=>prev+1)
    };

    console.log('Lenght')
    return (

        <div className={s.length}>
            <div className={s.break}>
                <p>Break Length</p>
                <div className={s.control}>
                    <button onClick={() => setBreakValue(a => a > 1 ? a - 1 : 1)}>
                        <CaretDownFilled/>
                    </button>
                    <div>{breakValue}</div>
                    <button onClick={() => setBreakValue(a => a < 59 ? a + 1 : 59)}><CaretUpFilled/></button>
                </div>

            </div>
            <div className={s.break}>
                <p>Session Length</p>
                <div className={s.control}>
                    <button onClick={downSesLength}><CaretDownFilled/></button>
                    <div>{sessionValue}</div>
                    <button onClick={upSesLength}><CaretUpFilled/></button>
                </div>

            </div>
        </div>
    );
};



import React, {useState} from 'react';
import s from './clock.module.css'
import 'antd/dist/antd.css';
import HeaderClock from "./HeaderClock";
import FooterClock from "./FooterClock";
import { MainClock } from './MainClock';


export const Clock = () => {

    const [sessionMain, setSessionMain] = useState({
        min: 25,
        sec: 0
    });

    return (
        <div className={s.container}>
            <HeaderClock/>
            <MainClock/>
            <FooterClock/>
        </div>
    );
};



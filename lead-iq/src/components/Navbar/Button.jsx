import React from "react";
import style from './style.module.css'
import { Link } from "react-router-dom";

const Button = () => {
    return (
        <>
        <button className={style.primaryBtn}><Link to='/bookDemo'>Book a demo</Link></button>
        </>
    )
}

export default Button;
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';
import Button from './Button';

const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavColor = () => {
        if(window.scrollY >= 300){
            setColorchange(true);
        } else{
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavColor);
    return (
        <div className={colorChange ? style.colorChange : style.nav}>
            <div className={style.navContainer}>
                <div className={style.logo}>
                    <Link to='/'>
                    <img src="https://assets.website-files.com/60819f9be381394642b5659e/6081a538174f4d6bc01bdd27_leadiq-logo.svg" alt="lazy" />
                    </Link>
                </div>
                <div className={style.menu}>

                </div>
                <div className={style.btn}>
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
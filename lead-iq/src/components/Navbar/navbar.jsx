import React from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
    const navStyle = {
        willChange: 'background',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        '&::before': {
            content: `" "`,
            display: 'table',
            gridColumnStart: '1',
            gridRowStart: '1',
            gridColumnEnd: '2',
            gridRowEnd: '2'
        },
        '&::after': {
            content: `" "`,
            display: 'table',
            gridColumnStart: '1',
            gridRowStart: '1',
            gridColumnEnd: '2',
            gridRowEnd: '2'
        }
    }

    return (
        <div className={style.nav} style={navStyle}>
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
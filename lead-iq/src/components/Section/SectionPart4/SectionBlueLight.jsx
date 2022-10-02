import React from "react";
import style from './style.module.css';


const SectionBlueLight = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.container_sub}>
                    <div className={style.container_sub_quote}>
                        <h3 className={style.container_sub_quote_h3}>What our amazing <span>users have to say</span></h3>
                    </div>
                </div>
                <div className={style.container_slider}></div>
            </div>
        </div>
    )
}

export default SectionBlueLight;
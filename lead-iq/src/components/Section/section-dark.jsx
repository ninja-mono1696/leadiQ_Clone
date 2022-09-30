import React from "react";
import style from './style.module.css';
import { Link } from "react-router-dom";

const SectionDark = () => {
    return (
        <div className={style.darkSection}>
            <div className={style.heroSection}>
                <div className={style._160mg}>
                    <div className={style.mainSection}>
                        <div className={style.mainSection_hero}></div>
                        <div className={style.text_center}>
                            <h1 className={style.bold}>Prospecting that's personal</h1>
                            <div className={style.content_wrap}>
                                <div className={style.word_wrap}>
                                    
                                </div>
                            </div>
                            <div className={style.inline}>
                                <div className={style.prospector_hero}>
                                    <button className={style.hero_btn1}><Link to="/bookDemo">Book a demo</Link></button>
                                    <button className={style.hero_btn2}><Link to="/signup">Start free</Link></button>
                                    <img className={style.hero_img1} src="https://assets.website-files.com/60819f9be381394642b5659e/62e2af399bdc6fcfbe9cbf59_no-credit-card.svg" alt="credit" loading="lazy" />
                                    <img className={style.hero_img2} src="https://assets.website-files.com/60819f9be381394642b5659e/62e69edeeb6f4a34fb0a718f_no-credit-card-vertical.svg" alt="credit-vertical" loading="lazy" />
                                </div>
                            </div>
                        </div>
                        <div className={style.hero_video}>
                            <div className={style.video_embed}>
                                <p>
                                    <a href="https://leadiq.com?wvideo=j1n36pcr0x">
                                        <img src="https://embed-ssl.wistia.com/deliveries/cfde895b5b6e3ad4e2d94fdba605c546.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=00d586e0" width="400" height="225" style={{width: '400px'}{height: '225px'}} alt="video" />
                                            </a>
                                            </p>
                                            <p>
                                                <a href="https://leadiq.com?wvideo=j1n36pcr0x">LeadIQ | B2B Outbound Sales Prospecting Software</a>
                                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionDark;
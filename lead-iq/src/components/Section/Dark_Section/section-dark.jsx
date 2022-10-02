import React from "react";
import { Link } from "react-router-dom";
import style from './style.module.css';
import Text from "./text";

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
                                    <Text />
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
                                <div>
                                    <iframe allowtransparency="true" title="Wistia video player" allowFullscreen frameborder="0" scrolling="no" className="wistia_embed" name="wistia_embed" src="https://fast.wistia.net/embed/iframe/j1n36pcr0x" width= '100%' height= '662.05px'></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.section_2}>
                        <div className={style.hero_section_2}>
                            <h2 className={style.section_2_h2}>Too many sellers, sending too many messages</h2>
                            <p className={style.section_2_p}>The world has never before been this noisy.</p>
                        </div>
                        <img className={style.world_noise_img} src="https://assets.website-files.com/60819f9be381394642b5659e/631a3251de5c6f228f20bd7a_world-noise.svg" alt="world-noise-img" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionDark;
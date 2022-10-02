import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';
import style from './style.module.css';

const SectionNeutral = () => {
    return (
        <div className={style.main}>
            <div className={style.container1}>
                <div className={style.sub1}>
                    <div className={style.hero1}>
                        <h2 className={style.bold}>Build sales pipeline smarter with the LeadIQ platform</h2>
                        <div className={style.hero_btn1}>
                            <Link to="/bookDemo" className={style.hero_link}>Book a demo</Link>
                        </div>
                    </div>
                </div>
                <div className={style.sub2}>
                    <div className={style.sub2_hero}>
                        <div className={style.wrapper_hero}>
                            <Link className={style.wrapper_link} to="/identify_Prospect_Data">
                                <div className={`${style.prospect_card} ${style.one}`}>
                                    <img src="https://assets.website-files.com/60819f9be381394642b5659e/63175e48773cbb3df9e0fcaf_identify-prospect-data.svg" alt="img" className={style.wrapper_img} />
                                </div>
                            </Link>
                            <div className={style.wrapper_content}>
                                <Link to="/identify_Prospect_Data" className={style.wrapper_link}>
                                    <div className={style.horizontal}>
                                        <div className={style.horizontal_hero}>
                                            <div>
                                                <h3 className={style.bold_h3}>Identify prospect data</h3>
                                            </div>
                                            <div className={style.arrow}>
                                                <p className={style.icon}><FaArrowRight /></p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <p className={style.content_p}>Find, capture, and sync contact data to your system of record faster.</p>
                            </div>
                        </div>
                        <div className={style.wrapper_hero}>
                            <Link to="/track_sales_trigger" className={style.wrapper_link}>
                                <div className={`${style.prospect_card} ${style.two}`}>
                                    <img src="https://assets.website-files.com/60819f9be381394642b5659e/63175e49615f15440015f8b7_track-sales-triggers.svg" alt="img" className={style.wrapper_img} />
                                </div>
                            </Link>
                            <div className={style.wrapper_content}>
                                <Link to="/track_sales_trigger" className={style.wrapper_link}>
                                    <div className={style.horizontal}>
                                        <div className={style.horizontal_hero}>
                                            <div>
                                                <h3 className={style.bold_h3}>Track sales triggers</h3>
                                            </div>
                                            <div className={style.arrow}>
                                                <p className={style.icon}><FaArrowRight /></p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <p className={style.content_p}>Identify the right time to reach out to key accounts and buyers for warmer outreach.</p>
                            </div>
                        </div>
                        <div className={style.wrapper_hero}>
                            <Link to="/compose_personal_messages" className={style.wrapper_link}>
                                <div className={`${style.prospect_card} ${style.three}`}>
                                    <img src="https://assets.website-files.com/60819f9be381394642b5659e/63175e480a2e474afbe0db64_compose-personal-messages.svg" alt="img" className={style.wrapper_img} />
                                </div>
                            </Link>
                            <div className={style.wrapper_content}>
                                <Link to="/compose_personal_messages" className={style.wrapper_link}>
                                    <div className={style.horizontal}>
                                        <div className={style.horizontal_hero}>
                                            <div>
                                                <h3 className={style.bold_h3}>Compose personal messages</h3>
                                            </div>
                                            <div className={style.arrow}>
                                                <p className={style.icon}><FaArrowRight /></p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <p className={style.content_p}>Generate tailored, complete sales messages in seconds — and stand above your competition.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.container2}>
                <div className={style.container2_hero}>
                    <p className={style.container2_hero_p}>Top sales teams have adopted the <span>LeadIQ way</span></p>
                </div>
                <div className={style.container2_logos}>
                    <div className={style.container2_logos_hero}>
                        <div className={style.container2_logos_hero_sub1}>
                            <div className={style.container2_logos_hero_sub2}>
                                <div className={style.container2_logos_hero_sub3}>
                                    <div className={style.container2_logos_hero_sub4}>
                                        <div className={style.container2_logos_hero_sub5}>
                                            <img src="https://assets.website-files.com/60819f9be381394642b5659e/62dc231d48e94804b0b8f925_Clari-Logo.svg" alt="" />
                                            <img src="https://assets.website-files.com/60819f9be381394642b5659e/62de9a7d43f2284e2cdfcbd1_Sigma-Logo.svg" alt="" />
                                            <img src="https://assets.website-files.com/60819f9be381394642b5659e/62dc231d6aace7cb07bf9a65_Optimizely-Logo.svg" alt="" />
                                            <img src="https://assets.website-files.com/60819f9be381394642b5659e/631a2023b91dcb72ce9fdd11_smartly-Logo.svg" alt="" />
                                            <img src="https://assets.website-files.com/60819f9be381394642b5659e/62dc231d4cf8133d1bdc1802_Walkme-Logo.svg" alt="" />
                                            <img src="https://assets.website-files.com/60819f9be381394642b5659e/62de9a8cf4adedd09de5ba18_Mulesoft-Logo.svg" alt="" />
                                            <img src="https://assets.website-files.com/60819f9be381394642b5659e/62de9ac3c3d0755d92ab84b5_Sitecore-Logo.svg" alt="" />
                                            <img src="https://assets.website-files.com/60819f9be381394642b5659e/62dc231d3103180f92b30e0a_Segment-Logo.svg" alt="" />
                                            <img src="https://assets.website-files.com/60819f9be381394642b5659e/62de9a9eab5726114cd70158_Liveperson-Logo.svg" alt="" />
                                            <img src="https://assets.website-files.com/60819f9be381394642b5659e/62dc231d8642e948ae1fd974_Bynder-Logo.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionNeutral;
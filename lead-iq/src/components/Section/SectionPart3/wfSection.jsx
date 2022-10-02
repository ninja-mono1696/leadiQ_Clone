import React from "react";
import { Link } from "react-router-dom";
import style from './style.module.css';

const WfSection = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.sub_container1}>
                    <h2 className={style.sub_container1_h2}>Designed for your entire team</h2>
                    <p className={style.sub_container1_p}>LeadIQ makes all sales roles more productive and effective.</p>
                </div>
                <div className={style.sub_container2}>
                    <div className={style.sub_container2_tabs}>
                        <div className={style.sub_container2_tab_menu}>
                            <Link to="/salesProfessionals" className={`${style.sub_container2_tab_link1} ${style.sub_container2_tab_link_common}`}>
                                <div className={`${style.sub_container2_tab_icon1} ${style.sub_container2_tab_icon_common}`}>
                                    <img className={style.sub_container2_tab_img_common} src="https://assets.website-files.com/60819f9be381394642b5659e/6310ffd645041c3873e31d16_sales-professionals.svg" alt="" />
                                </div>
                                <div>Sales professionals</div>
                            </Link>
                            <Link to="/salesLeaders" className={`${style.sub_container2_tab_link2} ${style.sub_container2_tab_link_common}`}>
                                <div className={`${style.sub_container2_tab_icon2} ${style.sub_container2_tab_icon_common}`}>
                                    <img className={style.sub_container2_tab_img_common} src="https://assets.website-files.com/60819f9be381394642b5659e/6310fe5eaf9b772a7ec7837c_sales-leaders.svg" alt="" />
                                </div>
                                <div>Sales leaders</div>
                            </Link>
                            <Link to="/revenueOps" className={`${style.sub_container2_tab_link3} ${style.sub_container2_tab_link_common}`}>
                                <div className={`${style.sub_container2_tab_icon3} ${style.sub_container2_tab_icon_common}`}>
                                    <img className={style.sub_container2_tab_img_common} src="https://assets.website-files.com/60819f9be381394642b5659e/6311025e180ffa316aa4293b_revenue-ops.svg" alt="" />
                                </div>
                                <div>Revenue ops</div>
                            </Link>
                            <Link to="/marketing" className={`${style.sub_container2_tab_link4} ${style.sub_container2_tab_link_common}`}>
                                <div className={`${style.sub_container2_tab_icon1} ${style.sub_container2_tab_icon_common}`}>
                                    <img className={style.sub_container2_tab_img_common} src="https://assets.website-files.com/60819f9be381394642b5659e/63110437d9c2f912c70575f5_marketing.svg" alt="" />
                                </div>
                                <div>Marketing</div>
                            </Link>
                        </div>
                        <div className={style.sub_container2_tab_content}>
                            <div className={style.sub_container2_tab_content_main}>
                                <div className={style.sub_container2_tab_content_wrapper}>
                                    <div className={style.sub_container2_tab_content_default}>
                                        <div className={style.sub_container2_tab_content_grid}>
                                            <div className={style.left_activities}>
                                                <div>
                                                    <h3 className={style.left_activities_h3}>Tailor your outbound prospecting</h3>
                                                    <p className={style.left_activities_p}>Capture the right contact, identify sales triggers, and allow us to automatically draft your personalized message in seconds.</p>
                                                </div>
                                                <div className={style.left_activities_btn}>
                                                    <Link to="/bookDemo" className={style.left_activities_link}>Book a demo</Link>
                                                </div>
                                            </div>
                                            <div className={style.right_activities}>
                                                <img className={style.right_activities_img} src="https://assets.website-files.com/60819f9be381394642b5659e/631f566c6a6cdc5b017b8af7_sales-professionals-visual.svg" alt="" />
                                            </div>
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
};

export default WfSection;
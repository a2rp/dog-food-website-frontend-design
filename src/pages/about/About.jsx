import React from "react";
import styles from "./styles.module.scss";
import image1 from "./images/image-about.png";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.col1}>
                    <div className={styles.whoWeAre}>WHO WE ARE</div>
                    <div className={styles.aboutUs}>ABOUT <span className={styles.us}>US</span></div>

                    <div className={styles.para1}>Thoughtfully prepared recipes and practical care for happier, healthier dogs.</div>

                    <div className={styles.para2}>Thoughtfully prepared recipes and practical care for happier, healthier dogs.</div>

                    <div className={styles.readMore}>READ MORE</div>
                </div>
                <div className={styles.col2}>
                    <img src={image1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About


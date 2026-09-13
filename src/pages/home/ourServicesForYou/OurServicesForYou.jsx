import React from "react";
import styles from "./styles.module.scss";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";

const OurServicesForYou = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>Care that fits real life</div>
                <div className={styles.aboutTitle}>
                    <div className={styles.aboutTitleMain}>From first bite to doorstep, every detail is designed around your dog.</div>
                </div>
                <div className={styles.imagesTextContainer}>
                    <div className={styles.columnsContainer}>
                        <div className={styles.col1}>
                            <img className={styles.image} src={image1} alt="" />
                            <div className={styles.textContainer}>
                                <div className={styles.colHeading}>Complete daily nutrition</div>
                                <div className={styles.colText}>From first bite to doorstep, every detail is designed around your dog.</div>
                            </div>
                        </div>
                        <div className={styles.col2}>
                            <img src={image2} alt="" />
                            <div className={styles.textContainer}>
                                <div className={styles.colHeading}>Fresh on your schedule</div>
                                <div className={styles.colText}>From first bite to doorstep, every detail is designed around your dog.</div>
                            </div>
                        </div>
                        <div className={styles.col3}>
                            <img src={image3} alt="" />
                            <div className={styles.textContainer}>
                                <div className={styles.colHeading}>Packed for freshness</div>
                                <div className={styles.colText}>From first bite to doorstep, every detail is designed around your dog.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServicesForYou



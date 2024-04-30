import React from 'react'
import styles from "./styles.module.scss";
import bgImage from "./images/services-bg.jpg";

const Services = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>My Services</div>
                <div className={styles.para1}>
                    Deliver better by <br />
                    <span>growing together</span>.
                </div>

                <div className={styles.para2}>We help you build the high performing organization you have always dreamt of.</div>

                <div className={styles.buttonContainer}>
                    <div className={styles.buttonDIV}>Get Started</div>
                </div>
            </div>
        </div>
    )
}

export default Services


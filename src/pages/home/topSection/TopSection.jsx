import React from "react";
import styles from "./styles.module.scss";
import image1 from "./images/image1-nobg.png";
import { GoDotFill } from "react-icons/go";
import { NavLink } from 'react-router-dom';

const TopSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topSection}>
                <div className={styles.main}>
                    <div className={styles.col1}>
                        <div className={styles.mainText}>BEST ORGANIC FOOD FOR YOUR DOG</div>
                        <div className={styles.infoText}>
                            Real Food <GoDotFill /> Made Fresh <GoDotFill /> Delivered
                        </div>
                        <NavLink to="/signup" className={styles.signup}>Sign up</NavLink>
                    </div>
                    <div className={styles.col2}>
                        <img src={image1} alt="" className={styles.image1} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSection


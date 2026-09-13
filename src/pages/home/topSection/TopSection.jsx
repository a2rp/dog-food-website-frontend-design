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
                        <div className={styles.eyebrow}>NOURISH EVERY ADVENTURE</div>
                        <div className={styles.mainText}>Real food for <span>good dogs.</span></div>
                        <div className={styles.supportText}>Freshly prepared meals made with honest ingredients, balanced nutrition, and plenty of tail-wagging flavor.</div>
                        <div className={styles.infoText}>
                            <span><GoDotFill /> Human-grade ingredients</span><span><GoDotFill /> Vet-informed recipes</span><span><GoDotFill /> Delivered fresh</span>
                        </div>
                        <NavLink to="/product" className={styles.signup}>Explore meals <span aria-hidden="true">-></span></NavLink>
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


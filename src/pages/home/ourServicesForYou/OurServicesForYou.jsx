import React from "react";
import styles from "./styles.module.scss";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";

const OurServicesForYou = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>Our Services for you</div>
                <div className={styles.aboutTitle}>
                    <div className={styles.aboutTitleMain}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tenetur molestias repudiandae sapiente neque nesciunt.</div>
                </div>
                <div className={styles.imagesTextContainer}>
                    <div className={styles.columnsContainer}>
                        <div className={styles.col1}>
                            <img className={styles.image} src={image1} alt="" />
                            <div className={styles.textContainer}>
                                <div className={styles.colHeading}>Vitamins and minerals</div>
                                <div className={styles.colText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laboriosam deserunt commodi sequi autem id neque magnam rerum labore odit.</div>
                            </div>
                        </div>
                        <div className={styles.col2}>
                            <img src={image1} alt="" />
                            <div className={styles.textContainer}>
                                <div className={styles.colHeading}>On time delivery</div>
                                <div className={styles.colText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laboriosam deserunt commodi sequi autem id neque magnam rerum labore odit.</div>
                            </div>
                        </div>
                        <div className={styles.col3}>
                            <img src={image1} alt="" />
                            <div className={styles.textContainer}>
                                <div className={styles.colHeading}>Secured packaging</div>
                                <div className={styles.colText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laboriosam deserunt commodi sequi autem id neque magnam rerum labore odit.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServicesForYou



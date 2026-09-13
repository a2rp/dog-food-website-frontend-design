import React from 'react'
import styles from "./styles.module.scss";
import image from "./images/image.png";

const OurBestSellingProducts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>Meals dogs look forward to</div>
                <div className={styles.aboutTitle}>
                    <div className={styles.aboutTitleMain}>Simple recipes with purposeful nutrition for every stage of life.</div>
                </div>
                <div className={styles.colsContainer}>
                    <div className={styles.col1}>
                        <img className={styles.image} src={image} alt="" />
                        <div className={styles.productName}>Daily Balance Bowl</div>
                        <div className={styles.price}>From INR 399</div>
                        <div className={styles.buttonContainer}>
                            <div className={styles.buyName}>Buy Now</div>
                        </div>
                    </div>
                    <div className={styles.col2}>
                        <img className={styles.image} src={image} alt="" />
                        <div className={styles.productName}>Active Pup Recipe</div>
                        <div className={styles.price}>From INR 399</div>
                        <div className={styles.buttonContainer}>
                            <div className={styles.buyName}>Buy Now</div>
                        </div>
                    </div>
                    <div className={styles.col3}>
                        <img className={styles.image} src={image} alt="" />
                        <div className={styles.productName}>Gentle Senior Blend</div>
                        <div className={styles.price}>From INR 399</div>
                        <div className={styles.buttonContainer}>
                            <div className={styles.buyName}>Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OurBestSellingProducts


import React from 'react'
import styles from "./styles.module.scss";
import image from "./images/image.png";

const OurBestSellingProducts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>Our Best Selling Products</div>
                <div className={styles.aboutTitle}>
                    <div className={styles.aboutTitleMain}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, aliquam. Assumenda magni soluta libero distinctio hic minus doloribus qui vero, obcaecati.</div>
                </div>
                <div className={styles.colsContainer}>
                    <div className={styles.col1}>
                        <img className={styles.image} src={image} alt="" />
                        <div className={styles.productName}>Product Name</div>
                        <div className={styles.price}>Price</div>
                        <div className={styles.buttonContainer}>
                            <div className={styles.buyName}>Buy Now</div>
                        </div>
                    </div>
                    <div className={styles.col2}>
                        <img className={styles.image} src={image} alt="" />
                        <div className={styles.productName}>Product Name</div>
                        <div className={styles.price}>Price</div>
                        <div className={styles.buttonContainer}>
                            <div className={styles.buyName}>Buy Now</div>
                        </div>
                    </div>
                    <div className={styles.col3}>
                        <img className={styles.image} src={image} alt="" />
                        <div className={styles.productName}>Product Name</div>
                        <div className={styles.price}>Price</div>
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


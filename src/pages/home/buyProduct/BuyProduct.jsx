import React from 'react'
import styles from "./styles.module.scss";

const BuyProduct = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageCover}></div>

            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.title}>Get the best food now for your pet</div>
                    <div className={styles.detail}>Get fresh food conveniently delivered with our secured delivery partners.</div>
                    <div className={styles.buyNowContainer}>
                        <div className={styles.buyNow}>Buy now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyProduct


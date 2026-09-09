import React from 'react'
import styles from "./styles.module.scss";

const Reviews = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>What do our users say?</div>

                <div className={styles.commentsContainer}>
                    <div className={styles.comment1}>
                        <div className={styles.comment}>Thoughtfully prepared recipes and practical care for happier, healthier dogs.</div>
                        <div className={styles.detail}>
                            <div className={styles.imageContainer}></div>
                            <div className={styles.name}>Celia Almenda</div>
                            <div className={styles.profession}>Secretary</div>
                        </div>
                    </div>
                    <div className={styles.comment2}>
                        <div className={styles.comment}>Thoughtfully prepared recipes and practical care for happier, healthier dogs.</div>
                        <div className={styles.detail}>
                            <div className={styles.imageContainer}></div>
                            <div className={styles.name}>Nat Reynoplds</div>
                            <div className={styles.profession}>Chielf Accountant</div>
                        </div>
                    </div>
                    <div className={styles.comment3}>
                        <div className={styles.comment}>Thoughtfully prepared recipes and practical care for happier, healthier dogs.</div>
                        <div className={styles.detail}>
                            <div className={styles.imageContainer}></div>
                            <div className={styles.name}>Bob Ronerts</div>
                            <div className={styles.profession}>Sales Manager</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews


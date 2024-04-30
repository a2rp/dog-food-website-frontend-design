import React from 'react'
import styles from "./styles.module.scss";
import { FaStar } from 'react-icons/fa';
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";

const CustomerReviews = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>Our customers reviews for our food delivery satisfaction</div>
                    <div className={styles.aboutTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione vero aut eligendi, ab corporis et eiusllo.</div>
                </div>

                <div className={styles.detail}>
                    <div className={styles.col1}>
                        <div className={styles.starContainer}>
                            <FaStar className={styles.starIcon} style={{ color: "gold" }} />
                            <FaStar className={styles.starIcon} style={{ color: "gold" }} />
                            <FaStar className={styles.starIcon} style={{ color: "gold" }} />
                            <FaStar className={styles.starIcon} style={{ color: "gold" }} />
                            <FaStar className={styles.starIcon} style={{ color: "gold" }} />
                        </div>
                        <div className={styles.reviewerName}>Juliana C.</div>
                        <div className={styles.reviewerComment}>
                            <div className={styles.commentMainLine}>"One of the most exciting innovations in pet food."</div>
                            <div className={styles.commentComplete}>"One of the most exciting innovations in pet food. The Farmer's Dof is a safe alternative to conventional brands. One of the most exciting innovations in pet food, The Farmer's Dog is safe alternative."</div>
                        </div>
                    </div>
                    <div className={styles.col2}>
                        <img className={styles.image} src={image1} alt="" />
                    </div>
                    <div className={styles.col3}>
                        <img className={styles.image} src={image2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReviews

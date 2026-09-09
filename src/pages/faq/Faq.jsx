import React from 'react'
import styles from "./styles.module.scss";

const Faq = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>FAQs</div>
                <div className={styles.info}>Got questions? We've got answers.</div>

                <div className={styles.qnaList}>
                    <div className={styles.question}>Thoughtfully prepared recipes and practical care for happier, healthier dogs.</div>
                    <div className={styles.answer}>Thoughtfully prepared recipes and practical care for happier, healthier dogs.</div>

                    <div className={styles.question}>Thoughtfully prepared recipes and practical care for happier, healthier dogs.</div>
                    <div className={styles.answer}>Thoughtfully prepared recipes and practical care for happier, healthier dogs.</div>

                    <div className={styles.question}>Thoughtfully prepared recipes and practical care for happier, healthier dogs.</div>
                    <div className={styles.answer}>Thoughtfully prepared recipes and practical care for happier, healthier dogs.</div>

                    <div className={styles.question}>Thoughtfully prepared recipes and practical care for happier, healthier dogs.</div>
                    <div className={styles.answer}>Thoughtfully prepared recipes and practical care for happier, healthier dogs.</div>
                </div>
            </div>
        </div>
    )
}

export default Faq


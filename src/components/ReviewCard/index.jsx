import { FaQuoteLeft, FaStar } from "react-icons/fa6";

import styles from "./styled.module.scss";

const ReviewCard = ({ name, role, text, rating = 5 }) => {
    return (
        <article className={styles.card}>
            <div className={styles.top}>
                <div className={styles.quote}>
                    <FaQuoteLeft />
                </div>

                <div
                    className={styles.stars}
                    aria-label={`${rating} out of 5 stars`}
                >
                    {Array.from({ length: 5 }, (_, index) => (
                        <FaStar
                            key={index}
                            className={index < rating ? styles.starActive : ""}
                        />
                    ))}
                </div>
            </div>

            <p className={styles.text}>{text}</p>

            <div className={styles.person}>
                <div className={styles.avatar}>
                    {name.charAt(0).toUpperCase()}
                </div>

                <div>
                    <h3>{name}</h3>
                    <p>{role}</p>
                </div>
            </div>
        </article>
    );
};

export default ReviewCard;

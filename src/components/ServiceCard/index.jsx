import { FaArrowRight } from "react-icons/fa6";

import styles from "./styled.module.scss";

const ServiceCard = ({ number, image, icon, title, text }) => {
    return (
        <article className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={image} alt={title} />

                <span className={styles.number}>{number}</span>

                {icon && <span className={styles.icon}>{icon}</span>}
            </div>

            <div className={styles.content}>
                <h3>{title}</h3>

                <p>{text}</p>

                <span className={styles.arrow}>
                    <FaArrowRight />
                </span>
            </div>
        </article>
    );
};

export default ServiceCard;

import { NavLink } from "react-router-dom";
import { FaArrowRight, FaLeaf, FaStar } from "react-icons/fa6";

import styles from "./styled.module.scss";

const ProductCard = ({ image, name, description, price, link, label }) => {
    return (
        <article className={styles.card}>
            <div className={styles.imageContainer}>
                {label && <span className={styles.label}>{label}</span>}

                <img src={image} alt={name} className={styles.image} />

                <div className={styles.imageIcon}>
                    <FaLeaf />
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.rating}>
                    <FaStar />
                    <span>4.9</span>
                </div>

                <h3>{name}</h3>

                <p>{description}</p>

                <div className={styles.footer}>
                    <div className={styles.price}>
                        <small>Starting at</small>
                        <strong>{price}</strong>
                    </div>

                    <NavLink
                        to={link}
                        className={styles.button}
                        aria-label={`View ${name}`}
                    >
                        <FaArrowRight />
                    </NavLink>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;

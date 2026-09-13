import { NavLink } from "react-router-dom";
import {
    FaArrowRight,
    FaBowlFood,
    FaLeaf,
    FaPaw,
    FaShieldHeart,
    FaStar,
} from "react-icons/fa6";

import heroDog from "./images/hero-dog.png";

import styles from "./styled.module.scss";

const TopSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.label}>
                        <FaPaw />
                        <span>Fresh nutrition for good dogs</span>
                    </div>

                    <h1>
                        Better bowls.
                        <span> Happier dogs.</span>
                    </h1>

                    <p className={styles.text}>
                        Freshly prepared meals made with recognizable
                        ingredients, balanced nutrition and plenty of
                        tail-wagging flavor.
                    </p>

                    <div className={styles.features}>
                        <span>
                            <FaLeaf />
                            Real ingredients
                        </span>

                        <span>
                            <FaShieldHeart />
                            Vet-informed
                        </span>

                        <span>
                            <FaBowlFood />
                            Made fresh
                        </span>
                    </div>

                    <div className={styles.actions}>
                        <NavLink to="/product" className={styles.primaryButton}>
                            Explore meals
                            <FaArrowRight />
                        </NavLink>

                        <NavLink to="/about" className={styles.secondaryButton}>
                            Our story
                        </NavLink>
                    </div>

                    <div className={styles.rating}>
                        <div className={styles.ratingStars}>
                            {Array.from({ length: 5 }, (_, index) => (
                                <FaStar key={index} />
                            ))}
                        </div>

                        <p>
                            <strong>4.9/5</strong>
                            loved by happy dog families
                        </p>
                    </div>
                </div>

                <div className={styles.visual}>
                    <span className={styles.circleOne}></span>
                    <span className={styles.circleTwo}></span>

                    <div className={styles.imageCard}>
                        <span className={styles.freshBadge}>Fresh daily</span>

                        <img
                            src={heroDog}
                            alt="Happy dog enjoying fresh Bowl and Bark food"
                        />
                    </div>

                    <div className={styles.infoCardOne}>
                        <span>
                            <FaLeaf />
                        </span>

                        <div>
                            <strong>Real food</strong>
                            <small>Simple ingredients</small>
                        </div>
                    </div>

                    <div className={styles.infoCardTwo}>
                        <strong>100%</strong>
                        <span>tail-wag approved</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopSection;

import { NavLink } from "react-router-dom";
import { FaArrowRight, FaTruckFast } from "react-icons/fa6";

import image from "./images/buy-product.jpg";

import styles from "./styled.module.scss";

const BuyProduct = () => {
    return (
        <section className={styles.container}>
            <div className={styles.main}>
                <img
                    src={image}
                    alt="Fresh Bowl and Bark dog food"
                    className={styles.image}
                />

                <div className={styles.overlay}></div>

                <div className={styles.content}>
                    <div className={styles.label}>
                        <FaTruckFast />
                        Fresh delivery
                    </div>

                    <h2>Good food deserves a place in every bowl.</h2>

                    <p>
                        Choose a meal, build a routine and get fresh food
                        delivered directly to your door.
                    </p>

                    <NavLink to="/product" className={styles.button}>
                        Shop fresh meals
                        <FaArrowRight />
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default BuyProduct;

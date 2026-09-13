import { NavLink } from "react-router-dom";
import { FaArrowLeft, FaBone, FaPaw } from "react-icons/fa6";

import styles from "./styled.module.scss";

const NotFound = () => {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <span className={styles.circleOne}></span>
                <span className={styles.circleTwo}></span>

                <div className={styles.pawOne}>
                    <FaPaw />
                </div>

                <div className={styles.pawTwo}>
                    <FaPaw />
                </div>

                <div className={styles.content}>
                    <div className={styles.bone}>
                        <FaBone />
                    </div>

                    <div className={styles.number}>
                        4
                        <span>
                            <FaPaw />
                        </span>
                        4
                    </div>

                    <h1>Looks like this page ran away.</h1>

                    <p>
                        We searched every bowl, toy basket and favorite sleeping
                        spot, but this page could not be found.
                    </p>

                    <NavLink to="/" className={styles.button}>
                        <FaArrowLeft />
                        Back to home
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

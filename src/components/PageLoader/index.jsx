import { FaPaw } from "react-icons/fa6";

import styles from "./styled.module.scss";

const PageLoader = () => {
    return (
        <div
            className={styles.container}
            role="status"
            aria-label="Loading page"
        >
            <div className={styles.loader}>
                <span className={styles.circle}></span>

                <div className={styles.icon}>
                    <FaPaw />
                </div>

                <span className={styles.circle}></span>
            </div>

            <p>Preparing a fresh bowl...</p>
        </div>
    );
};

export default PageLoader;

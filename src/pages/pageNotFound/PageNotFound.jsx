import React from "react";
import styles from "./styles.module.scss";

const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.fourOfour}>404</div>
                <div className={styles.pageNotFound}>Page not found</div>
            </div>
        </div>
    )
}

export default PageNotFound


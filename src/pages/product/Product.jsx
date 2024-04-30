import React from 'react'
import styles from "./styles.module.scss";
import { Outlet } from 'react-router-dom';

const Product = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>Product</div>
                <div className={styles.outlet}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Product


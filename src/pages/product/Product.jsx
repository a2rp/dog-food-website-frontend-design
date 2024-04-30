import React from 'react'
import styles from "./styles.module.scss";
import { Outlet } from 'react-router-dom';

const Product = () => {
    return (
        <div>
            Product
            <Outlet />
        </div>
    )
}

export default Product


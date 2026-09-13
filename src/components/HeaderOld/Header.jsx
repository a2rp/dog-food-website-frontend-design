import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiChevronDown, FiMenu, FiShoppingBag, FiX } from "react-icons/fi";
import { FaPaw } from "react-icons/fa";

import styles from "./styles.module.scss";

const productLinks = [
    {
        label: "Daily Balance Bowl",
        to: "/product/product1",
    },
    {
        label: "Active Pup Recipe",
        to: "/product/product2",
    },
    {
        label: "Gentle Senior Blend",
        to: "/product/product3",
    },
];

const Header = () => {
    const { pathname } = useLocation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const getNavClassName = ({ isActive }) =>
        `${styles.navLink} ${isActive ? styles.active : ""}`;

    const isProductRoute = pathname.startsWith("/product");

    return (
        <header className={styles.container}>
            <div className={styles.main}>
                <NavLink
                    to="/home"
                    className={styles.brand}
                    aria-label="Bowl and Bark home"
                >
                    <span className={styles.brandIcon}>
                        <FaPaw />
                    </span>

                    <span className={styles.brandText}>
                        Bowl <strong>&</strong> Bark
                    </span>
                </NavLink>

                <nav
                    className={styles.desktopNavigation}
                    aria-label="Main navigation"
                >
                    <NavLink to="/home" className={getNavClassName}>
                        Home
                    </NavLink>

                    <NavLink to="/about" className={getNavClassName}>
                        About
                    </NavLink>

                    <NavLink to="/services" className={getNavClassName}>
                        Services
                    </NavLink>

                    <div className={styles.productNavigation}>
                        <button
                            type="button"
                            className={`${styles.productButton} ${
                                isProductRoute ? styles.active : ""
                            }`}
                        >
                            Products
                            <FiChevronDown />
                        </button>

                        <div className={styles.productMenu}>
                            <div className={styles.productMenuInner}>
                                {productLinks.map((product) => (
                                    <NavLink
                                        key={product.to}
                                        to={product.to}
                                        className={styles.productLink}
                                    >
                                        <span>{product.label}</span>

                                        <span className={styles.productArrow}>
                                            →
                                        </span>
                                    </NavLink>
                                ))}

                                <NavLink
                                    to="/product"
                                    className={styles.viewAllProducts}
                                >
                                    View all meals
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <NavLink to="/reviews" className={getNavClassName}>
                        Reviews
                    </NavLink>

                    <NavLink to="/faq" className={getNavClassName}>
                        FAQ
                    </NavLink>
                </nav>

                <div className={styles.actions}>
                    <NavLink to="/product" className={styles.shopButton}>
                        <FiShoppingBag />

                        <span>Shop meals</span>
                    </NavLink>

                    <button
                        type="button"
                        className={styles.menuButton}
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        <FiMenu />
                    </button>
                </div>
            </div>

            <div
                className={`${styles.mobileMenu} ${
                    isMenuOpen ? styles.mobileMenuOpen : ""
                }`}
                aria-hidden={!isMenuOpen}
            >
                <button
                    type="button"
                    className={styles.mobileBackdrop}
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close navigation menu"
                />

                <div className={styles.mobilePanel}>
                    <div className={styles.mobileHeader}>
                        <div className={styles.mobileBrand}>
                            <span className={styles.brandIcon}>
                                <FaPaw />
                            </span>

                            <span>Bowl & Bark</span>
                        </div>

                        <button
                            type="button"
                            className={styles.closeButton}
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close navigation menu"
                        >
                            <FiX />
                        </button>
                    </div>

                    <nav className={styles.mobileNavigation}>
                        <NavLink to="/home">Home</NavLink>

                        <NavLink to="/about">About us</NavLink>

                        <NavLink to="/services">Services</NavLink>

                        <div className={styles.mobileProducts}>
                            <div className={styles.mobileLabel}>Products</div>

                            {productLinks.map((product) => (
                                <NavLink
                                    key={product.to}
                                    to={product.to}
                                    className={styles.mobileProductLink}
                                >
                                    {product.label}

                                    <span>→</span>
                                </NavLink>
                            ))}
                        </div>

                        <NavLink to="/reviews">Reviews</NavLink>

                        <NavLink to="/faq">FAQ</NavLink>
                    </nav>

                    <NavLink to="/product" className={styles.mobileShopButton}>
                        <FiShoppingBag />
                        Shop all meals
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;

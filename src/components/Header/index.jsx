import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
    FaArrowRight,
    FaBars,
    FaChevronDown,
    FaPaw,
    FaXmark,
} from "react-icons/fa6";

import styles from "./styled.module.scss";

const Header = () => {
    const { pathname } = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
        setMobileProductsOpen(false);
    }, [pathname]);

    const getNavClass = ({ isActive }) =>
        `${styles.navLink} ${isActive ? styles.active : ""}`;

    return (
        <header className={styles.container}>
            <div className={styles.inner}>
                <NavLink to="/" className={styles.logo}>
                    <span className={styles.logoIcon}>
                        <FaPaw />
                    </span>

                    <span className={styles.logoText}>
                        Bowl <span>&</span> Bark
                    </span>
                </NavLink>

                <nav className={styles.desktopNav} aria-label="Main navigation">
                    <NavLink to="/" className={getNavClass}>
                        Home
                    </NavLink>

                    <NavLink to="/about" className={getNavClass}>
                        About
                    </NavLink>

                    <NavLink to="/services" className={getNavClass}>
                        Services
                    </NavLink>

                    <div className={styles.productMenu}>
                        <button
                            type="button"
                            className={`${styles.productButton} ${
                                pathname.startsWith("/product")
                                    ? styles.active
                                    : ""
                            }`}
                        >
                            Products
                            <FaChevronDown />
                        </button>

                        <div className={styles.productDropdown}>
                            <NavLink to="/product/product1">
                                <span>Daily Balance Bowl</span>
                                <small>Everyday nutrition</small>
                            </NavLink>

                            <NavLink to="/product/product2">
                                <span>Active Pup Recipe</span>
                                <small>High energy dogs</small>
                            </NavLink>

                            <NavLink to="/product/product3">
                                <span>Gentle Senior Blend</span>
                                <small>Senior support</small>
                            </NavLink>
                        </div>
                    </div>

                    <NavLink to="/reviews" className={getNavClass}>
                        Reviews
                    </NavLink>

                    <NavLink to="/faq" className={getNavClass}>
                        FAQ
                    </NavLink>
                </nav>

                <div className={styles.actions}>
                    <NavLink to="/product" className={styles.shopButton}>
                        Shop meals
                        <FaArrowRight />
                    </NavLink>

                    <button
                        type="button"
                        className={styles.menuButton}
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open navigation menu"
                        aria-expanded={menuOpen}
                    >
                        <FaBars />
                    </button>
                </div>
            </div>

            <button
                type="button"
                className={`${styles.overlay} ${
                    menuOpen ? styles.overlayVisible : ""
                }`}
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
            />

            <aside
                className={`${styles.mobileMenu} ${
                    menuOpen ? styles.mobileMenuOpen : ""
                }`}
            >
                <div className={styles.mobileHeader}>
                    <NavLink
                        to="/"
                        className={styles.mobileLogo}
                        onClick={() => setMenuOpen(false)}
                    >
                        <FaPaw />
                        Bowl & Bark
                    </NavLink>

                    <button
                        type="button"
                        className={styles.closeButton}
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close navigation menu"
                    >
                        <FaXmark />
                    </button>
                </div>

                <nav className={styles.mobileNav}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/services">Services</NavLink>

                    <button
                        type="button"
                        className={styles.mobileProductButton}
                        onClick={() =>
                            setMobileProductsOpen((current) => !current)
                        }
                    >
                        Products
                        <FaChevronDown
                            className={
                                mobileProductsOpen ? styles.rotateIcon : ""
                            }
                        />
                    </button>

                    <div
                        className={`${styles.mobileProductLinks} ${
                            mobileProductsOpen
                                ? styles.mobileProductLinksOpen
                                : ""
                        }`}
                    >
                        <NavLink to="/product/product1">
                            Daily Balance Bowl
                        </NavLink>

                        <NavLink to="/product/product2">
                            Active Pup Recipe
                        </NavLink>

                        <NavLink to="/product/product3">
                            Gentle Senior Blend
                        </NavLink>
                    </div>

                    <NavLink to="/reviews">Reviews</NavLink>
                    <NavLink to="/faq">FAQ</NavLink>
                </nav>

                <NavLink to="/product" className={styles.mobileShopButton}>
                    Explore all meals
                    <FaArrowRight />
                </NavLink>

                <p className={styles.mobileText}>
                    Fresh food, thoughtful nutrition and happier bowls.
                </p>
            </aside>
        </header>
    );
};

export default Header;

import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);
    const hamburgerLinksContainerRef = useRef(null);
    const [displayHamburgerLinks, setDisplayHamburgerLinks] = useState(false);

    useEffect(() => {
        const line1 = line1Ref.current;
        const line2 = line2Ref.current;
        const line3 = line3Ref.current;
        const hamburgerLinksContainer = hamburgerLinksContainerRef.current;
        if (displayHamburgerLinks === true) {
            line1.style.cssText = `transform: rotateZ(45deg);`;
            line2.style.cssText = `transform: rotateX(90deg);`;
            line3.style.cssText = `transform: rotateZ(-45deg);`;
            hamburgerLinksContainer.style.cssText = `transform: translateX(0)`;
        } else if (displayHamburgerLinks === false) {
            line1.style.cssText = `transform: translateY(-10px) rotateZ(0)`;
            line2.style.cssText = `transform: rotateX(0);`;
            line3.style.cssText = `transform: translateY(10px) rotateZ(0)`;
            hamburgerLinksContainer.style.cssText = `transform: translateX(200%)`;
        }
    }, [displayHamburgerLinks]);

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.leftSection}>
                    <NavLink to="/home" className={styles.logo}>Logo</NavLink>
                    <NavLink to="/about" className={styles.navlink}>About us</NavLink>
                    <NavLink to="/services" className={styles.navlink}>Services</NavLink>

                    <div className={styles.productNavlinksParent}>
                        <div className={styles.productText}>Product</div>
                        <div className={styles.productIcon}>
                            <FaAngleDown className={styles.icon} />
                        </div>
                        <div className={styles.productNavlinksContainer}>
                            <NavLink to="/product/profuct1" className={styles.productNavlink}>
                                Product 1
                            </NavLink>
                            <NavLink to="/product/profuct2" className={styles.productNavlink}>
                                Product 2
                            </NavLink>
                            <NavLink to="/product/profuct3" className={styles.productNavlink}>
                                Product 3
                            </NavLink>
                        </div>
                    </div>

                    <NavLink to="/reviews" className={styles.navlink}>Reviews</NavLink>
                    <NavLink to="/faq" className={styles.navlink}>FAQ</NavLink>
                </div>

                <div className={styles.rightSection}>
                    <div className={styles.login}>Login</div>
                    <div
                        className={styles.hamburger}
                        onClick={() => setDisplayHamburgerLinks(!displayHamburgerLinks)}
                    >
                        <div ref={line1Ref} className={styles.line1}></div>
                        <div ref={line2Ref} className={styles.line2}></div>
                        <div ref={line3Ref} className={styles.line3}></div>
                    </div>
                    <div
                        ref={hamburgerLinksContainerRef}
                        className={styles.hamburgerLinksContainer}
                    >
                        <div
                            className={styles.empty}
                            onClick={() => setDisplayHamburgerLinks(!displayHamburgerLinks)}
                        ></div>
                        <div className={styles.navlinksContainer}>
                            <NavLink to="/home" className={styles.hamburgerNavlink}>Home</NavLink>
                            <NavLink to="/about" className={styles.hamburgerNavlink}>About us</NavLink>
                            <NavLink to="/services" className={styles.hamburgerNavlink}>Services</NavLink>
                            <div className={styles.productNavlinkText}>Product</div>
                            <div className={styles.productNavlinksContainer}>
                                <NavLink to="/product/product1" className={styles.hamburgerNavlink}>Product 1</NavLink>
                                <NavLink to="/product/product2" className={styles.hamburgerNavlink}>Product 2</NavLink>
                                <NavLink to="/product/product3" className={styles.hamburgerNavlink}>Product 3</NavLink>
                            </div>
                            <NavLink to="/reviews" className={styles.hamburgerNavlink}>Reviews</NavLink>
                            <NavLink to="/faq" className={styles.hamburgerNavlink}>FAQ</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header



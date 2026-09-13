import React from "react";
import styles from "./styles.module.scss";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.addressContactEmail}>
                <div className={styles.address}>
                    <div className={styles.iconContainer}><CiLocationOn className={styles.icon} /></div>
                    <div className={styles.iconText}>Address</div>
                </div>
                <div className={styles.contact}>
                    <div className={styles.iconContainer}><FiPhone className={styles.icon} /></div>
                    <div className={styles.iconText}>Contact</div>
                </div>
                <div className={styles.email}>
                    <div className={styles.iconContainer}><MdOutlineEmail className={styles.icon} /></div>
                    <div className={styles.iconText}>Email</div>
                </div>
            </div>

            <div className={styles.navlinks}>
                <NavLink to="/about" className={styles.navlink}>About</NavLink>
                <NavLink to="/faq" className={styles.navlink}>FAQ</NavLink>
                <NavLink to="/reviews" className={styles.navlink}>Reviews</NavLink>
                <NavLink to="/login" className={styles.navlink}>Log in</NavLink>
                <NavLink to="/signup" className={styles.navlink}>Sign up</NavLink>
            </div>

            <div className={styles.bottom}>
                <div className={styles.colsContainer}>
                    <div className={styles.col1}>
                        <div className={styles.text}>Free Health and Nutrition Tips</div>
                        <div className={styles.emailInputContainer}>
                            <input className={styles.emailInput} type="email" placeholder="Enter email" />
                            <div className={styles.arrowRightContainer}>
                                <FaChevronRight className={styles.arrowRightIcon} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.col2}>
                        <div className={styles.facebookIcon}>
                            <FaFacebookF className={styles.icon} />
                        </div>
                        <div className={styles.facebookIcon}>
                            <FaFacebookF className={styles.icon} />
                        </div>
                        <div className={styles.instagramIcon}>
                            <FaInstagram className={styles.icon} />
                        </div>
                        <div className={styles.facebookIcon}>
                            <FaInstagram className={styles.icon} />
                        </div>
                    </div>

                    <div className={styles.col3}>
                        <div className={styles.line1}>Made with love in India</div>
                        <div className={styles.line2}>
                            <FaRegCopyright /> 2021 name<sup>TM</sup>
                        </div>
                        <div className={styles.line3}>
                            <div className={styles.line3Container}>
                                Privacy Policy
                                <GoDotFill className={styles.goDotIcon} />
                                Terms and Conditions
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer


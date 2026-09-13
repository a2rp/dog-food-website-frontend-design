import { NavLink } from "react-router-dom";
import {
    FaArrowRight,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaPaw,
    FaYoutube,
} from "react-icons/fa6";

import styles from "./styled.module.scss";

const Footer = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <footer className={styles.container}>
            <div className={styles.main}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <NavLink to="/" className={styles.logo}>
                            <span className={styles.logoIcon}>
                                <FaPaw />
                            </span>

                            <span>
                                Bowl <b>&</b> Bark
                            </span>
                        </NavLink>

                        <p>
                            Freshly prepared dog food made with thoughtful
                            ingredients and everyday nutrition in mind.
                        </p>

                        <div className={styles.socials}>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="YouTube"
                            >
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    <div className={styles.linksGroup}>
                        <p className={styles.title}>Explore</p>

                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">Our story</NavLink>
                        <NavLink to="/product">Meals</NavLink>
                        <NavLink to="/services">Services</NavLink>
                    </div>

                    <div className={styles.linksGroup}>
                        <p className={styles.title}>Support</p>

                        <NavLink to="/faq">FAQs</NavLink>
                        <NavLink to="/reviews">Reviews</NavLink>
                        <NavLink to="/services">Delivery</NavLink>

                        <a href="mailto:hello@bowlandbark.com">Contact us</a>
                    </div>

                    <div className={styles.newsletter}>
                        <p className={styles.title}>Fresh from the bowl</p>

                        <p className={styles.newsletterText}>
                            Get simple nutrition tips and product updates in
                            your inbox.
                        </p>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <FaEnvelope />

                            <input
                                type="email"
                                placeholder="Your email address"
                                aria-label="Email address"
                                required
                            />

                            <button
                                type="submit"
                                aria-label="Subscribe to newsletter"
                            >
                                <FaArrowRight />
                            </button>
                        </form>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>
                        © {new Date().getFullYear()} Bowl & Bark. All rights
                        reserved.
                    </p>

                    <div className={styles.bottomLinks}>
                        <NavLink to="/faq">Privacy</NavLink>
                        <NavLink to="/faq">Terms</NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

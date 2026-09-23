import { NavLink } from "react-router-dom";
import {
    FaArrowRight,
    FaCodepen,
    FaEnvelope,
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
    FaPatreon,
    FaYoutube,
} from "react-icons/fa";

import styles from "./styled.module.scss";

const logo = `${process.env.PUBLIC_URL}/logo.png`;

const socialLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: "◎" },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aashishranjan",
        icon: FaLinkedinIn,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/theash.ashish/",
        icon: FaFacebookF,
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",
        icon: FaYoutube,
    },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FaEnvelope },
    {
        label: "Support",
        href: "https://a2rp-donation-page.netlify.app/",
        icon: "♥",
    },
    {
        label: "Buy Me a Coffee",
        href: "https://buymeacoffee.com/a2rp",
        icon: "☕",
    },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FaPatreon },
];

const Footer = () => {
    const handleSubmit = (event) => event.preventDefault();

    return (
        <footer className={styles.container}>
            <div className={styles.main}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <NavLink to="/" className={styles.logo}>
                            <span className={styles.logoIcon}>
                                <img src={logo} alt="Bowl and Bark logo" />
                            </span>
                            <span>
                                Bowl <b>&</b> Bark
                            </span>
                        </NavLink>

                        <p>
                            Freshly prepared dog food made with thoughtful
                            ingredients and everyday nutrition in mind.
                        </p>

                        <div className={styles.socials} aria-label="Social links">
                            {socialLinks.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                                    aria-label={label}
                                    title={label}
                                >
                                    {typeof Icon === "string" ? Icon : <Icon />}
                                </a>
                            ))}
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
                        <a href="mailto:ash.ranjan09@gmail.com">Contact us</a>
                    </div>

                    <div className={styles.newsletter}>
                        <p className={styles.title}>Fresh from the bowl</p>
                        <p className={styles.newsletterText}>
                            Get simple nutrition tips and product updates in
                            your inbox.
                        </p>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <FaEnvelope aria-hidden="true" />
                            <input
                                type="email"
                                placeholder="Your email address"
                                aria-label="Email address"
                                required
                            />
                            <button type="submit" aria-label="Subscribe to newsletter">
                                <FaArrowRight aria-hidden="true" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>
                        Copyright © {new Date().getFullYear()} {" "}
                        <a
                            href="https://www.ashishranjan.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ashish Ranjan
                        </a>
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

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

import styles from "./styled.module.scss";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 500);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            type="button"
            className={`${styles.button} ${visible ? styles.visible : ""}`}
            onClick={handleClick}
            aria-label="Go to top"
            title="Go to top"
        >
            <FaArrowUp />
        </button>
    );
};

export default ScrollToTop;

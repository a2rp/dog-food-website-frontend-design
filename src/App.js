import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import PageRoutes from "./pageRoutes";
import { useLocation } from "react-router-dom";
import { FaCircleArrowUp } from "react-icons/fa6";

const App = () => {
    const mainRef = useRef(null);
    const { pathname } = useLocation();
    useEffect(() => {
        mainRef.current.scrollTo(0, 0);
    }, [pathname]);

    const goTopFunc = () => {
        mainRef.current.scrollTo(0, 0);
    }

    useEffect(() => {
        const myButton = document.querySelector(".arrowUp");
        const main = mainRef.current;
        const handleScroll = event => {
            if (main.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                myButton.style.display = "block";
            } else {
                myButton.style.display = "none";
            }
        };

        main.addEventListener("scroll", handleScroll);

        return () => {
            main.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}><Header /></div>

            <div ref={mainRef} className={styles.main}>
                <div className={styles.router}>
                    <div className={styles.pageRoutes}>
                        <PageRoutes />
                    </div>
                    <div className={styles.footer}><Footer /></div>
                </div>
            </div>

            {/* <div className={`${styles.arrowUp} arrowUp`}> */}
            <FaCircleArrowUp
                className={`${styles.arrowUp} arrowUp`}
                onClick={goTopFunc}
            />
            {/* </div> */}
        </div>
    )
}

export default App


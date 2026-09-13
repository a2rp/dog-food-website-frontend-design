import { NavLink } from "react-router-dom";
import {
    FaArrowRight,
    FaBowlFood,
    FaHeart,
    FaLeaf,
    FaPaw,
    FaShieldHeart,
} from "react-icons/fa6";

import SectionHeader from "../../components/SectionHeader";

import aboutImage from "./images/about.png";

import styles from "./styled.module.scss";

const values = [
    {
        icon: <FaLeaf />,
        title: "Real ingredients",
        text: "We believe dog food should be easy to understand, with ingredients that look and feel familiar.",
    },
    {
        icon: <FaShieldHeart />,
        title: "Thoughtful nutrition",
        text: "Every recipe is designed around balanced everyday feeding and practical long-term routines.",
    },
    {
        icon: <FaHeart />,
        title: "Made with care",
        text: "From preparation to packaging, every detail is considered with dogs and their families in mind.",
    },
];

const About = () => {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <div className={styles.heroContent}>
                        <div className={styles.label}>
                            <FaPaw />
                            Our story
                        </div>

                        <h1>
                            Food made for dogs.
                            <span> Care made for families.</span>
                        </h1>

                        <p>
                            Bowl & Bark started with one simple idea: feeding
                            your dog better food should not feel complicated. We
                            create fresh, understandable meals designed to make
                            everyday feeding easier.
                        </p>

                        <NavLink to="/product" className={styles.heroButton}>
                            Explore our meals
                            <FaArrowRight />
                        </NavLink>
                    </div>

                    <div className={styles.heroVisual}>
                        <span className={styles.shape}></span>

                        <div className={styles.imageWrapper}>
                            <img
                                src={aboutImage}
                                alt="Happy dog representing Bowl and Bark"
                            />
                        </div>

                        <div className={styles.floatingCard}>
                            <span>
                                <FaBowlFood />
                            </span>

                            <div>
                                <strong>Good food</strong>
                                <small>Made simple</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.story}>
                <div className={styles.storyInner}>
                    <div className={styles.storyNumber}>
                        <span>01</span>
                    </div>

                    <div className={styles.storyContent}>
                        <SectionHeader
                            label="Why Bowl & Bark"
                            title="A simpler way to think about your dog's bowl."
                            align="left"
                        />

                        <div className={styles.storyText}>
                            <p>
                                Dog parents deserve to know what they are
                                serving. That is why our approach begins with
                                clarity: understandable ingredients, sensible
                                portions and recipes designed around everyday
                                life.
                            </p>

                            <p>
                                We focus on creating food that feels premium
                                without making feeding complicated. Good
                                nutrition should fit naturally into your dog's
                                routine and your own.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.values}>
                <div className={styles.valuesInner}>
                    <SectionHeader
                        label="What matters to us"
                        title="Simple values behind every bowl."
                        text="Everything we create starts with the same principles: clarity, care and consistency."
                    />

                    <div className={styles.valueGrid}>
                        {values.map((value, index) => (
                            <article
                                key={value.title}
                                className={styles.valueCard}
                            >
                                <div className={styles.valueTop}>
                                    <span className={styles.valueIcon}>
                                        {value.icon}
                                    </span>

                                    <small>0{index + 1}</small>
                                </div>

                                <h2>{value.title}</h2>

                                <p>{value.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.ctaInner}>
                    <div>
                        <span className={styles.ctaLabel}>
                            <FaPaw />
                            Ready for a better bowl?
                        </span>

                        <h2>Fresh food can start with the next meal.</h2>
                    </div>

                    <NavLink to="/product" className={styles.ctaButton}>
                        See all meals
                        <FaArrowRight />
                    </NavLink>
                </div>
            </section>
        </div>
    );
};

export default About;

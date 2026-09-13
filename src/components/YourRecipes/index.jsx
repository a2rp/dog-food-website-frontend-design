import { NavLink } from "react-router-dom";
import {
    FaArrowRight,
    FaBowlFood,
    FaCarrot,
    FaLeaf,
    FaShieldHeart,
} from "react-icons/fa6";

import SectionHeader from "../SectionHeader";

import recipeImage from "./images/recipe.png";

import styles from "./styled.module.scss";

const features = [
    {
        icon: <FaCarrot />,
        title: "Real ingredients",
        text: "Recognizable meats and vegetables in straightforward recipes.",
    },
    {
        icon: <FaLeaf />,
        title: "Made fresh",
        text: "Gentle preparation designed to keep fresh food appealing.",
    },
    {
        icon: <FaBowlFood />,
        title: "Easy portions",
        text: "Simple servings make everyday feeding easier to manage.",
    },
    {
        icon: <FaShieldHeart />,
        title: "Thoughtful nutrition",
        text: "Balanced recipes designed around practical daily feeding.",
    },
];

const YourRecipes = () => {
    return (
        <section className={styles.container}>
            <div className={styles.main}>
                <SectionHeader
                    label="Inside every bowl"
                    title="Freshly made food for good health."
                    text="Less mystery, more real food. Every recipe is designed to make everyday feeding simpler to understand."
                />

                <div className={styles.content}>
                    <div className={styles.features}>
                        {features.slice(0, 2).map((feature) => (
                            <article
                                key={feature.title}
                                className={styles.feature}
                            >
                                <span>{feature.icon}</span>

                                <div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className={styles.imageContainer}>
                        <span className={styles.imageCircle}></span>

                        <img
                            src={recipeImage}
                            alt="Fresh Bowl and Bark dog food ingredients"
                        />

                        <div className={styles.badge}>
                            <strong>Fresh</strong>
                            <span>real food</span>
                        </div>
                    </div>

                    <div className={styles.features}>
                        {features.slice(2).map((feature) => (
                            <article
                                key={feature.title}
                                className={styles.feature}
                            >
                                <span>{feature.icon}</span>

                                <div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className={styles.action}>
                    <NavLink to="/product" className={styles.button}>
                        Find your dog's meal
                        <FaArrowRight />
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default YourRecipes;

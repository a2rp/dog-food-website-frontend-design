import React from "react";
import styles from "./styles.module.scss";
import image from "./images/image.png";

const YourRecipes = () => {
    return (
        <div className={styles.container}>
            <div className={styles.recipesTitle}>Freshly made food for good health.</div>
            <div className={styles.aboutTitle}>
                <div className={styles.aboutTitleMain}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum dignissimos facere, quos corrupti dolore iste modi.</div>
            </div>
            <div className={styles.main}>
                <div className={styles.columnsContainer}>
                    <div className={styles.col1}>
                        <div className={styles.col1Row1}>
                            <div className={styles.col1Title}>Real Food</div>
                            <div className={styles.col1Text}>Human-grade meat and veggies in simple recipes, made for dogs</div>
                        </div>
                        <div className={styles.col1Row2}>
                            <div className={styles.col1Title}>Standard Kitchen</div>
                            <div className={styles.col1Text}>Safety and quality never before available to pets</div>
                        </div>
                    </div>
                    <div className={styles.col2}>
                        <img className={styles.image} src={image} alt="" />
                    </div>
                    <div className={styles.col3}>
                        <div className={styles.col3Row1}>
                            <div className={styles.col3Title}>Made Fresh</div>
                            <div className={styles.col3Text}>Maintain whole food and nutritional integrity</div>
                        </div>
                        <div className={styles.col3Row2}>
                            <div className={styles.col3Title}>Expert tested</div>
                            <div className={styles.col3Text}>Nutrition that exceeds industry standards for dogs. (AAFCO)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.recipesLink}>
                <div className={styles.seeYourRecipes}>See your recipes</div>
            </div>
        </div>
    )
}

export default YourRecipes


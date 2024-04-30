import React from 'react'
import styles from "./styles.module.scss";
import { NavLink } from 'react-router-dom';

const ResuableComponent = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.mainTitle}>{props.mainTitle}</div>
            <div className={styles.aboutTitle}>
                <div className={styles.aboutTitleMain}>{props.aboutTitleMain}</div>
            </div>
            <div className={styles.main}>
                <div className={styles.columnsContainer}>
                    <div className={styles.col1}>
                        <div className={styles.col1Row1}>
                            <div className={styles.col1Title}>{props.row1Col1Title}</div>
                            <div className={styles.col1Text}>{props.row1Col1Text}</div>
                        </div>
                        <div className={styles.col1Row2}>
                            <div className={styles.col1Title}>{props.row2Col1Title}</div>
                            <div className={styles.col1Text}>{props.row2Col1Text}</div>
                        </div>
                    </div>
                    <div className={styles.col2}>
                        <img className={styles.image} src={props.image} alt="" />
                    </div>
                    <div className={styles.col3}>
                        <div className={styles.col3Row1}>
                            <div className={styles.col3Title}>{props.row1Col3Title}</div>
                            <div className={styles.col3Text}>{props.row1Col3Text}</div>
                        </div>
                        <div className={styles.col3Row2}>
                            <div className={styles.col3Title}>{props.row2Col3Title}</div>
                            <div className={styles.col3Text}>{props.row2Col3Text}</div>
                        </div>
                    </div>
                </div>
            </div>
            {props.navlink
                && <div className={styles.recipesLink}>
                    <NavLink to={props.navlink} className={styles.seeYourRecipes}>See your recipes</NavLink>
                </div>}
        </div>
    )
}

export default ResuableComponent

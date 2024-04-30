import React from 'react'
import styles from "./styles.module.scss";

const Reviews = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>What do our users say?</div>

                <div className={styles.commentsContainer}>
                    <div className={styles.comment1}>
                        <div className={styles.comment}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur impedit aut, eaque odit deserunt incidunt eligendi debitis, aspernatur, labore illo a quisquam dolorem. Incidunt, repellendus tempore. Harum eligendi mollitia nemo!</div>
                        <div className={styles.detail}>
                            <div className={styles.imageContainer}></div>
                            <div className={styles.name}>Celia Almenda</div>
                            <div className={styles.profession}>Secretary</div>
                        </div>
                    </div>
                    <div className={styles.comment2}>
                        <div className={styles.comment}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur impedit aut, eaque odit deserunt incidunt eligendi debitis, aspernatur, labore illo a quisquam dolorem. Incidunt, repellendus tempore. Harum eligendi mollitia nemo!lorem1500 et Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt necessitatibus laudantium voluptatem dolores? Provident. </div>
                        <div className={styles.detail}>
                            <div className={styles.imageContainer}></div>
                            <div className={styles.name}>Nat Reynoplds</div>
                            <div className={styles.profession}>Chielf Accountant</div>
                        </div>
                    </div>
                    <div className={styles.comment3}>
                        <div className={styles.comment}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur impedit aut, eaque odit deserunt incidunt eligendi debitis, aspernatur, labore illo a quisquam dolorem. Incidunt, repellendus tempore. Harum eligendi mollitia nemo! Lorem ipsum dolor sit amet. </div>
                        <div className={styles.detail}>
                            <div className={styles.imageContainer}></div>
                            <div className={styles.name}>Bob Ronerts</div>
                            <div className={styles.profession}>Sales Manager</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews


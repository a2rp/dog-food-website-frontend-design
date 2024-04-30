import React from 'react'
import styles from "./styles.module.scss";

const Faq = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>FAQs</div>
                <div className={styles.info}>Got questions? We've got answers.</div>

                <div className={styles.qnaList}>
                    <div className={styles.question}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit asperiores repellendus est.?</div>
                    <div className={styles.answer}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis veniam beatae dolores reprehenderit animi ducimus incidunt fugiat vitae delectus molestiae, ratione, quae eius, nemo iste rerum voluptas consequuntur ab nihil dolorum enim. Iusto, id ea saepe vero voluptate atque cupiditate commodi, alias ipsa pariatur possimus minima, temporibus tempora praesentium enim.</div>

                    <div className={styles.question}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, blandituis voluptate tempore, ad nam voluptates sint beatae praesentium?</div>
                    <div className={styles.answer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam officiis eveniet, quisquam voluptas sit dolor veniam quo iste iusto commodi est repellat?</div>

                    <div className={styles.question}>Lorem ipsum dolor sit ameuis voluptate tempore, ad nam voluptates sint beatae praesentium?</div>
                    <div className={styles.answer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam officiis eveniet, Lorem, ipsum. quisquam voluptas sit dolor veniam quo iste iusto commodi est repellat?</div>

                    <div className={styles.question}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, blanditpellendus ex. Ea eos placeate tempore, ad nam voluptates sint beatae praesentium?</div>
                    <div className={styles.answer}>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam dignissimos quisquam officiis. adipisicing elit. Saepe quam officiis eveniet, quisquam voluptas sit dolor veniam quo iste iusto commodi est repellat?</div>
                </div>
            </div>
        </div>
    )
}

export default Faq


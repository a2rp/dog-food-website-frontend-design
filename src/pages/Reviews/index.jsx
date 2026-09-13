import { FaHeart, FaPaw, FaStar } from "react-icons/fa6";

import ReviewCard from "../../components/ReviewCard";
import SectionHeader from "../../components/SectionHeader";

import image1 from "../../components/CustomerReviews/images/image1.png";
import image2 from "../../components/CustomerReviews/images/image2.png";

import styles from "./styled.module.scss";

const reviews = [
    {
        name: "Juliana C.",
        role: "Dog parent",
        rating: 5,
        text: "My dog used to walk away from breakfast. Now he waits beside his bowl before I even open the pack. Feeding has become much easier.",
    },
    {
        name: "Aaron M.",
        role: "Dog parent",
        rating: 5,
        text: "The portions are convenient and the meals actually look like food. Our dog adjusted quickly and seems excited for every meal.",
    },
    {
        name: "Nina R.",
        role: "Dog parent",
        rating: 5,
        text: "I wanted something easy to understand and simple to serve. Bowl & Bark makes the daily routine feel much less complicated.",
    },
    {
        name: "Megan T.",
        role: "Dog parent",
        rating: 5,
        text: "The whole experience feels polished, from choosing the recipe to serving it. My dog definitely approves of the final part.",
    },
    {
        name: "Ravi K.",
        role: "Dog parent",
        rating: 5,
        text: "Fresh food always sounded difficult to manage, but this approach feels practical enough to actually make part of a routine.",
    },
    {
        name: "Emily S.",
        role: "Dog parent",
        rating: 5,
        text: "The simple ingredients and clear portions were what convinced me. The enthusiastic reaction at dinner time was a bonus.",
    },
];

const Reviews = () => {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <div className={styles.heroText}>
                        <span className={styles.label}>
                            <FaPaw />
                            Customer stories
                        </span>

                        <h1>
                            Happy dogs make
                            <span> the best reviewers.</span>
                        </h1>

                        <p>
                            Fresh bowls, cleaner routines and plenty of excited
                            tails. See what dog families have to say.
                        </p>
                    </div>

                    <div className={styles.score}>
                        <strong>4.9</strong>

                        <div className={styles.stars}>
                            {Array.from({ length: 5 }, (_, index) => (
                                <FaStar key={index} />
                            ))}
                        </div>

                        <p>Average customer rating</p>

                        <span>
                            <FaHeart />
                            Loved by dog families
                        </span>
                    </div>
                </div>
            </section>

            <section className={styles.gallery}>
                <div className={styles.galleryInner}>
                    <div className={styles.largeImage}>
                        <img
                            src={image1}
                            alt="Happy Bowl and Bark customer dog"
                        />
                    </div>

                    <div className={styles.smallImage}>
                        <img src={image2} alt="Dog enjoying fresh food" />
                    </div>

                    <div className={styles.galleryMessage}>
                        <FaHeart />

                        <strong>
                            Real dogs.
                            <br />
                            Real happy bowls.
                        </strong>

                        <p>Mealtime should be the easiest part of their day.</p>
                    </div>
                </div>
            </section>

            <section className={styles.reviews}>
                <div className={styles.reviewsInner}>
                    <SectionHeader
                        label="From the community"
                        title="What dog parents are saying."
                        text="Every family has a different routine, but the goal is the same: a happy dog and a bowl they enjoy."
                    />

                    <div className={styles.reviewGrid}>
                        {reviews.map((review) => (
                            <ReviewCard key={review.name} {...review} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;

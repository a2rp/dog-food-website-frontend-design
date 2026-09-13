import { FaHeart, FaStar } from "react-icons/fa6";

import ReviewCard from "../ReviewCard";
import SectionHeader from "../SectionHeader";

import image1 from "./images/image1.png";
import image2 from "./images/image2.png";

import styles from "./styled.module.scss";

const reviews = [
    {
        name: "Juliana C.",
        role: "Dog parent",
        rating: 5,
        text: "My dog used to walk away from breakfast. Now he waits beside his bowl before I even open the pack. The ingredients feel simple and the routine is much easier.",
    },
    {
        name: "Aaron M.",
        role: "Dog parent",
        rating: 5,
        text: "The portions are convenient, delivery is simple and the meals look like actual food. Our dog adjusted quickly and seems genuinely excited for every meal.",
    },
    {
        name: "Nina R.",
        role: "Dog parent",
        rating: 5,
        text: "I wanted something easy to understand and easy to serve. Bowl & Bark has made feeding time feel simpler while still feeling thoughtful and premium.",
    },
];

const CustomerReviews = () => {
    return (
        <section className={styles.container}>
            <div className={styles.main}>
                <div className={styles.headerRow}>
                    <SectionHeader
                        label="Happy bowls"
                        title="Loved by dogs. Trusted by their humans."
                        text="Real experiences from families who made fresh food part of their dog's everyday routine."
                        align="left"
                    />

                    <div className={styles.score}>
                        <div className={styles.scoreTop}>
                            <strong>4.9</strong>

                            <div>
                                <div className={styles.stars}>
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <FaStar key={index} />
                                    ))}
                                </div>

                                <span>Customer rating</span>
                            </div>
                        </div>

                        <p>
                            <FaHeart />
                            Thousands of happy mealtimes
                        </p>
                    </div>
                </div>

                <div className={styles.gallery}>
                    <div className={styles.imageOne}>
                        <img
                            src={image1}
                            alt="Happy dog enjoying Bowl and Bark"
                        />
                    </div>

                    <div className={styles.imageTwo}>
                        <img src={image2} alt="Dog with fresh meal" />
                    </div>
                </div>

                <div className={styles.reviews}>
                    {reviews.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;

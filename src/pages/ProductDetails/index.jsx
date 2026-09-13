import { NavLink, useParams } from "react-router-dom";
import {
    FaArrowLeft,
    FaArrowRight,
    FaBowlFood,
    FaCheck,
    FaClock,
    FaHeart,
    FaLeaf,
    FaShieldHeart,
    FaStar,
} from "react-icons/fa6";

import productImage from "../../components/OurBestSellingProducts/images/product.png";

import styles from "./styled.module.scss";

const products = {
    product1: {
        name: "Daily Balance Bowl",
        label: "Best seller",
        subtitle: "Complete everyday nutrition",
        description:
            "A balanced fresh recipe designed for healthy adult dogs and uncomplicated everyday feeding.",
        price: "₹399",
        serving: "Daily meal",
        recipe: "Chicken, vegetables and balanced nutrients",
        points: [
            "Everyday balanced nutrition",
            "Simple recognizable ingredients",
            "Easy serving and portioning",
            "Designed for adult dogs",
        ],
    },

    product2: {
        name: "Active Pup Recipe",
        label: "High energy",
        subtitle: "Fuel for active days",
        description:
            "A satisfying fresh recipe for active dogs that need dependable nutrition for energetic routines.",
        price: "₹449",
        serving: "Active meal",
        recipe: "Protein-rich recipe with vegetables",
        points: [
            "Designed for active dogs",
            "Protein-forward recipe",
            "Supports energetic routines",
            "Simple daily portions",
        ],
    },

    product3: {
        name: "Gentle Senior Blend",
        label: "Senior care",
        subtitle: "Gentle everyday nourishment",
        description:
            "A softer, thoughtful recipe designed around the changing eating habits and routines of older dogs.",
        price: "₹429",
        serving: "Senior meal",
        recipe: "Gentle protein and easy-to-enjoy ingredients",
        points: [
            "Designed with senior dogs in mind",
            "Gentle texture and ingredients",
            "Straightforward serving",
            "Balanced daily routine",
        ],
    },
};

const ProductDetails = () => {
    const { productId } = useParams();

    const product = products[productId];

    if (!product) {
        return (
            <div className={styles.invalid}>
                <FaBowlFood />

                <h1>That bowl is not on our menu.</h1>

                <NavLink to="/product">
                    View all meals
                    <FaArrowRight />
                </NavLink>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <section className={styles.product}>
                <div className={styles.productInner}>
                    <div className={styles.imageSide}>
                        <NavLink to="/product" className={styles.backLink}>
                            <FaArrowLeft />
                            All meals
                        </NavLink>

                        <div className={styles.imageWrapper}>
                            <span className={styles.imageCircle}></span>

                            <span className={styles.productLabel}>
                                {product.label}
                            </span>

                            <img src={productImage} alt={product.name} />

                            <div className={styles.imageBadge}>
                                <FaLeaf />
                                Fresh recipe
                            </div>
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.rating}>
                            <div>
                                {Array.from({ length: 5 }, (_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </div>

                            <span>4.9 customer rating</span>
                        </div>

                        <span className={styles.subtitle}>
                            {product.subtitle}
                        </span>

                        <h1>{product.name}</h1>

                        <p className={styles.description}>
                            {product.description}
                        </p>

                        <div className={styles.price}>
                            <small>Starting from</small>
                            <strong>{product.price}</strong>
                            <span>/ pack</span>
                        </div>

                        <div className={styles.details}>
                            <div>
                                <span>
                                    <FaClock />
                                </span>

                                <p>
                                    <small>Ideal for</small>
                                    <strong>{product.serving}</strong>
                                </p>
                            </div>

                            <div>
                                <span>
                                    <FaBowlFood />
                                </span>

                                <p>
                                    <small>Recipe</small>
                                    <strong>{product.recipe}</strong>
                                </p>
                            </div>
                        </div>

                        <div className={styles.points}>
                            {product.points.map((point) => (
                                <p key={point}>
                                    <span>
                                        <FaCheck />
                                    </span>

                                    {point}
                                </p>
                            ))}
                        </div>

                        <button type="button" className={styles.buyButton}>
                            Choose this meal
                            <FaArrowRight />
                        </button>

                        <p className={styles.note}>
                            Frontend demonstration only. No checkout or payment
                            is connected.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.infoSection}>
                <div className={styles.infoInner}>
                    <article>
                        <span>
                            <FaLeaf />
                        </span>

                        <h2>Real ingredients</h2>

                        <p>
                            Simple recipes designed to make the bowl easier to
                            understand.
                        </p>
                    </article>

                    <article>
                        <span>
                            <FaShieldHeart />
                        </span>

                        <h2>Thoughtful nutrition</h2>

                        <p>
                            Built around practical everyday feeding and
                            consistent routines.
                        </p>
                    </article>

                    <article>
                        <span>
                            <FaHeart />
                        </span>

                        <h2>Made for happy bowls</h2>

                        <p>
                            Fresh food designed to make mealtime something dogs
                            can look forward to.
                        </p>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;

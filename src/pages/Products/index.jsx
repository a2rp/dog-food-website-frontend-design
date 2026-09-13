import {
    FaBowlFood,
    FaCheck,
    FaLeaf,
    FaPaw,
    FaTruckFast,
} from "react-icons/fa6";

import ProductCard from "../../components/ProductCard";
import SectionHeader from "../../components/SectionHeader";

import productImage from "../../components/OurBestSellingProducts/images/product.png";

import styles from "./styled.module.scss";

const products = [
    {
        name: "Daily Balance Bowl",
        description:
            "Balanced everyday nutrition made for healthy adult dogs and easy daily feeding.",
        price: "₹399",
        link: "/product/product1",
        label: "Best seller",
    },
    {
        name: "Active Pup Recipe",
        description:
            "A nourishing recipe designed for active dogs, bigger appetites and energetic days.",
        price: "₹449",
        link: "/product/product2",
        label: "High energy",
    },
    {
        name: "Gentle Senior Blend",
        description:
            "A gentle recipe created with the changing needs and routines of older dogs in mind.",
        price: "₹429",
        link: "/product/product3",
        label: "Senior care",
    },
];

const benefits = [
    {
        icon: <FaLeaf />,
        title: "Clear ingredients",
        text: "Straightforward recipes with ingredients you can recognize.",
    },
    {
        icon: <FaBowlFood />,
        title: "Easy portions",
        text: "Simple serving makes everyday meal routines easier.",
    },
    {
        icon: <FaTruckFast />,
        title: "Fresh delivery",
        text: "Convenient delivery designed around your feeding schedule.",
    },
];

const Products = () => {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <div className={styles.label}>
                        <FaPaw />
                        Our fresh meals
                    </div>

                    <h1>
                        Find the right bowl for
                        <span> every kind of dog.</span>
                    </h1>

                    <p>
                        Fresh, practical recipes designed around everyday
                        nutrition, different life stages and the joy of a
                        genuinely exciting mealtime.
                    </p>

                    <div className={styles.heroBenefits}>
                        <span>
                            <FaCheck />
                            Freshly prepared
                        </span>

                        <span>
                            <FaCheck />
                            Thoughtful recipes
                        </span>

                        <span>
                            <FaCheck />
                            Easy to serve
                        </span>
                    </div>
                </div>
            </section>

            <section className={styles.productsSection}>
                <div className={styles.productsInner}>
                    <SectionHeader
                        label="Choose their favorite"
                        title="Three recipes. One very happy dog."
                        text="Start with the recipe that best matches your dog's routine and stage of life."
                    />

                    <div className={styles.productGrid}>
                        {products.map((product) => (
                            <ProductCard
                                key={product.name}
                                {...product}
                                image={productImage}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.benefitsSection}>
                <div className={styles.benefitsInner}>
                    {benefits.map((benefit) => (
                        <article key={benefit.title} className={styles.benefit}>
                            <span>{benefit.icon}</span>

                            <div>
                                <h2>{benefit.title}</h2>
                                <p>{benefit.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Products;

import ProductCard from "../ProductCard";
import SectionHeader from "../SectionHeader";

import productImage from "./images/product.png";

import styles from "./styled.module.scss";

const products = [
    {
        name: "Daily Balance Bowl",
        description:
            "A balanced everyday recipe made for healthy adult dogs and happy daily routines.",
        price: "₹399",
        link: "/product/product1",
        label: "Best seller",
    },
    {
        name: "Active Pup Recipe",
        description:
            "A nourishing recipe created for active dogs with big appetites and busy days.",
        price: "₹449",
        link: "/product/product2",
        label: "High energy",
    },
    {
        name: "Gentle Senior Blend",
        description:
            "A soft, thoughtful recipe designed around the changing needs of older dogs.",
        price: "₹429",
        link: "/product/product3",
        label: "Gentle recipe",
    },
];

const OurBestSellingProducts = () => {
    return (
        <section className={styles.container}>
            <div className={styles.main}>
                <SectionHeader
                    label="Fresh favorites"
                    title="Meals dogs look forward to."
                    text="Simple recipes with purposeful nutrition for everyday dogs and every stage of life."
                />

                <div className={styles.products}>
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
    );
};

export default OurBestSellingProducts;

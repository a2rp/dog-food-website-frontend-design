import React from "react";
import styles from "./styles.module.scss";
import TopSection from "./topSection";
import OurServicesForYou from "./ourServicesForYou";
import OurBestSellingProducts from "./ourBestSellingProducts";
import ResuableComponent from "../../components/resuableComponent";
import recipeImage from "./yourRecipes/images/image.png";
import securedPackagingImage from "./securedPackaging/images/image.png";
import VetsSuggestions from "./vetsSuggestions";
import CustomerReviews from "./customerReviews";
import BuyProduct from "./buyProduct";

const Home = () => {
    return (
        <div className={styles.container}>
            <TopSection />
            {/* recepies */}
            <ResuableComponent
                mainTitle={"Freshly made food for good health."}
                image={recipeImage}
                aboutTitleMain={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum dignissimos facere, quos corrupti dolore iste modi."}
                row1Col1Title={"Real Food"}
                row1Col1Text={"Human-grade meat and veggies in simple recipes, made for dogs"}
                row2Col1Title={"Standard Kitchen"}
                row2Col1Text={"Safety and quality never before available to pets"}
                row1Col3Title={"Made Fresh"}
                row1Col3Text={"Maintain whole food and nutritional integrity"}
                row2Col3Title={"Expert tested"}
                row2Col3Text={"Nutrition that exceeds industry standards for dogs. (AAFCO)"}
                navlink={"/recipe"}
            />
            <OurServicesForYou />
            <OurBestSellingProducts />

            {/* packaging */}
            <ResuableComponent
                mainTitle={"Special secured packaging with multiple layers"}
                image={securedPackagingImage}
                aboutTitleMain={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum dignissimos facere, quos corrupti dolore iste modi."}
                row1Col1Title={"Feature 1"}
                row1Col1Text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis reprehenderit dolore, fuga accusamus suscipit magni."}
                row2Col1Title={"Feature 3"}
                row2Col1Text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis reprehenderit dolore, fuga accusamus suscipit magni."}
                row1Col3Title={"Feature 2"}
                row1Col3Text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis reprehenderit dolore, fuga accusamus suscipit magni."}
                row2Col3Title={"Feature 4"}
                row2Col3Text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis reprehenderit dolore, fuga accusamus suscipit magni."}
            />
            <VetsSuggestions />
            <CustomerReviews />
            <BuyProduct />
        </div>
    )
}

export default Home


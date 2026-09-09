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
                aboutTitleMain={"Balanced recipes made with recognizable ingredients, gentle preparation, and nutrition your dog can enjoy every day."}
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
                mainTitle={"Freshness sealed in every delivery"}
                image={securedPackagingImage}
                aboutTitleMain={"Balanced recipes made with recognizable ingredients, gentle preparation, and nutrition your dog can enjoy every day."}
                row1Col1Title={"Cold-chain protection"}
                row1Col1Text={"Thoughtfully prepared recipes and practical care for happier, healthier dogs."}
                row2Col1Title={"Easy portioning"}
                row2Col1Text={"Thoughtfully prepared recipes and practical care for happier, healthier dogs."}
                row1Col3Title={"Leak-resistant seal"}
                row1Col3Text={"Thoughtfully prepared recipes and practical care for happier, healthier dogs."}
                row2Col3Title={"Recyclable materials"}
                row2Col3Text={"Thoughtfully prepared recipes and practical care for happier, healthier dogs."}
            />
            <VetsSuggestions />
            <CustomerReviews />
            <BuyProduct />
        </div>
    )
}

export default Home


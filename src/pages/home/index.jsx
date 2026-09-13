import BuyProduct from "../../components/BuyProduct";
import CustomerReviews from "../../components/CustomerReviews";
import OurBestSellingProducts from "../../components/OurBestSellingProducts";
import OurServicesForYou from "../../components/OurServicesForYou";
import TopSection from "../../components/TopSection";
import VetsSuggestions from "../../components/VetsSuggestions";
import YourRecipes from "../../components/YourRecipes";

import styles from "./styled.module.scss";

const Home = () => {
    return (
        <div className={styles.container}>
            <TopSection />

            <OurServicesForYou />

            <OurBestSellingProducts />

            <YourRecipes />

            <VetsSuggestions />

            <CustomerReviews />

            <BuyProduct />
        </div>
    );
};

export default Home;

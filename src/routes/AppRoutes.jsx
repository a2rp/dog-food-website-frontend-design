import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import PageLoader from "../components/PageLoader";

const Home = lazy(() => import("../pages/home/index.jsx"));

const About = lazy(() => import("../pages/about/index.jsx"));

const Products = lazy(() => import("../pages/Products/index.jsx"));

const ProductDetails = lazy(() => import("../pages/ProductDetails/index.jsx"));

const Services = lazy(() => import("../pages/services/index.jsx"));

const Reviews = lazy(() => import("../pages/Reviews/index.jsx"));

const Faq = lazy(() => import("../pages/Faq/index.jsx"));

const Login = lazy(() => import("../pages/Login/index.jsx"));

const NotFound = lazy(() => import("../pages/NotFound/index.jsx"));

const AppRoutes = () => {
    const location = useLocation();

    return (
        <Suspense key={location.pathname} fallback={<PageLoader />}>
            <Routes location={location}>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/product" element={<Products />} />

                <Route
                    path="/product/:productId"
                    element={<ProductDetails />}
                />

                <Route path="/services" element={<Services />} />

                <Route path="/reviews" element={<Reviews />} />

                <Route path="/faq" element={<Faq />} />

                <Route path="/login" element={<Login />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;

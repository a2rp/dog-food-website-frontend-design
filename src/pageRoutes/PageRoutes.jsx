import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import loadingImage from "./images/loading.gif";

const wait = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

const About = lazy(() => wait(500).then(() => import("../pages/about")));
const Faq = lazy(() => wait(500).then(() => import("../pages/faq")));
const Home = lazy(() => wait(500).then(() => import("../pages/home")));
const Product = lazy(() => wait(500).then(() => import("../pages/product")));
const Product1 = lazy(() => wait(500).then(() => import("../pages/product/product1")));
const Product2 = lazy(() => wait(500).then(() => import("../pages/product/product2")));
const Product3 = lazy(() => wait(500).then(() => import("../pages/product/product3")));
const Reviews = lazy(() => wait(500).then(() => import("../pages/reviews")));
const Services = lazy(() => wait(500).then(() => import("../pages/services")));
const PageNotFound = lazy(() => wait(500).then(() => import("../pages/pageNotFound")));

const Router = () => {
    return (
        <Suspense
            fallback={<img src={loadingImage}
                alt=""
                style={{ marginLeft: "50%", transform: "translateX(-50%)", marginTop: "100px" }} />}
        >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/product" element={<Product />}>
                    <Route path="product1" element={<Product1 />} />
                    <Route path="product2" element={<Product2 />} />
                    <Route path="product3" element={<Product3 />} />
                </Route>
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/services" element={<Services />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>

        </Suspense >
    )
}

export default Router


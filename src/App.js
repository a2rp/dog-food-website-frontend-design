import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [pathname]);

    return (
        <div className="app-shell">
            <Header />

            <main className="app-main">
                <AppRoutes />
            </main>

            <Footer />

            <ScrollToTop />
        </div>
    );
};

export default App;

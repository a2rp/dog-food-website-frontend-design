import {
    FaArrowRight,
    FaBowlFood,
    FaBoxOpen,
    FaClock,
    FaLeaf,
    FaPaw,
    FaTruckFast,
} from "react-icons/fa6";

import SectionHeader from "../../components/SectionHeader";
import ServiceCard from "../../components/ServiceCard";

import image1 from "../../components/OurServicesForYou/images/image1.png";
import image2 from "../../components/OurServicesForYou/images/image2.png";
import image3 from "../../components/OurServicesForYou/images/image3.png";

import heroImage from "./images/services-bg.jpg";

import styles from "./styled.module.scss";

const services = [
    {
        number: "01",
        image: image1,
        icon: <FaBowlFood />,
        title: "Fresh meal planning",
        text: "Straightforward recipes and practical portions make daily feeding simpler to manage.",
    },
    {
        number: "02",
        image: image2,
        icon: <FaTruckFast />,
        title: "Flexible delivery",
        text: "Fresh food delivered around your routine so the next bowl is easier to plan.",
    },
    {
        number: "03",
        image: image3,
        icon: <FaBoxOpen />,
        title: "Careful packaging",
        text: "Meals are packed thoughtfully to help maintain freshness during delivery and storage.",
    },
];

const steps = [
    {
        icon: <FaLeaf />,
        title: "Pick a recipe",
        text: "Choose the meal that best suits your dog's everyday routine.",
    },
    {
        icon: <FaClock />,
        title: "Choose a routine",
        text: "Plan portions and delivery around the schedule that works for you.",
    },
    {
        icon: <FaTruckFast />,
        title: "Serve fresh",
        text: "Receive fresh food and make every meal simple to serve.",
    },
];

const Services = () => {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <img src={heroImage} alt="" className={styles.heroImage} />

                <div className={styles.heroOverlay}></div>

                <div className={styles.heroContent}>
                    <div className={styles.label}>
                        <FaPaw />
                        More than a meal
                    </div>

                    <h1>
                        Fresh feeding,
                        <span> made easier.</span>
                    </h1>

                    <p>
                        Thoughtful services designed to simplify everything from
                        choosing a recipe to getting the next fresh bowl ready.
                    </p>

                    <a href="#services" className={styles.heroButton}>
                        Explore services
                        <FaArrowRight />
                    </a>
                </div>
            </section>

            <section id="services" className={styles.services}>
                <div className={styles.servicesInner}>
                    <SectionHeader
                        label="How we help"
                        title="From our kitchen to your dog's bowl."
                        text="A simple experience built around fresh food, practical routines and reliable delivery."
                    />

                    <div className={styles.serviceGrid}>
                        {services.map((service) => (
                            <ServiceCard key={service.title} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.process}>
                <div className={styles.processInner}>
                    <div className={styles.processHeader}>
                        <span>Simple by design</span>

                        <h2>Three steps to a better feeding routine.</h2>
                    </div>

                    <div className={styles.steps}>
                        {steps.map((step, index) => (
                            <article key={step.title} className={styles.step}>
                                <div className={styles.stepTop}>
                                    <span className={styles.stepIcon}>
                                        {step.icon}
                                    </span>

                                    <small>0{index + 1}</small>
                                </div>

                                <h3>{step.title}</h3>

                                <p>{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;

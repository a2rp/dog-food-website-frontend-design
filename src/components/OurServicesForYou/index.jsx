import { FaBowlFood, FaBoxOpen, FaTruckFast } from "react-icons/fa6";

import SectionHeader from "../SectionHeader";
import ServiceCard from "../ServiceCard";

import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";

import styles from "./styled.module.scss";

const services = [
    {
        number: "01",
        image: image1,
        icon: <FaBowlFood />,
        title: "Complete daily nutrition",
        text: "Balanced meals made with clear ingredients and practical everyday feeding in mind.",
    },
    {
        number: "02",
        image: image2,
        icon: <FaTruckFast />,
        title: "Fresh on your schedule",
        text: "Flexible delivery designed to make fresh feeding easier to fit into real life.",
    },
    {
        number: "03",
        image: image3,
        icon: <FaBoxOpen />,
        title: "Packed for freshness",
        text: "Careful packaging helps every portion arrive fresh, secure and ready for the bowl.",
    },
];

const OurServicesForYou = () => {
    return (
        <section className={styles.container}>
            <div className={styles.main}>
                <SectionHeader
                    label="Made simple"
                    title="Care that fits real life."
                    text="From first bite to doorstep, every detail is designed around your dog and your daily routine."
                />

                <div className={styles.services}>
                    {services.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServicesForYou;

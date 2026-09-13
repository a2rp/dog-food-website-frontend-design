import { useState } from "react";
import { FaChevronDown, FaEnvelope, FaPaw } from "react-icons/fa6";

import SectionHeader from "../../components/SectionHeader";

import styles from "./styled.module.scss";

const faqs = [
    {
        question: "What makes Bowl & Bark different?",
        answer: "Bowl & Bark focuses on fresh, understandable recipes and a simple feeding experience. The goal is to make everyday nutrition easier for dog parents to understand and manage.",
    },
    {
        question: "Which meal should I choose for my dog?",
        answer: "Daily Balance Bowl is designed as an everyday option, Active Pup Recipe is aimed at energetic dogs, and Gentle Senior Blend is designed with older dogs in mind. This website is a frontend demonstration, so product descriptions are illustrative rather than veterinary advice.",
    },
    {
        question: "How should fresh dog food be stored?",
        answer: "Fresh food normally needs appropriate refrigeration and handling. Always follow the storage and serving guidance supplied with the actual product you purchase.",
    },
    {
        question: "Can I change my delivery schedule?",
        answer: "The website concept is designed around flexible delivery. A real production implementation could allow customers to change dates, frequency and quantities from their account.",
    },
    {
        question: "Is Bowl & Bark suitable for every dog?",
        answer: "Every dog can have different nutritional requirements. For dogs with medical conditions, allergies or specific dietary needs, consult a qualified veterinarian before changing their diet.",
    },
    {
        question: "Do you offer recurring deliveries?",
        answer: "The design supports the idea of recurring meal deliveries. Subscription and payment functionality are not connected in this frontend-only demonstration.",
    },
    {
        question: "Can I cancel an order?",
        answer: "A production store could provide cancellation rules based on preparation and dispatch status. No real orders are processed through this frontend demo.",
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex((current) => (current === index ? -1 : index));
    };

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <span className={styles.label}>
                        <FaPaw />
                        Need a little help?
                    </span>

                    <h1>
                        Frequently asked
                        <span> questions.</span>
                    </h1>

                    <p>
                        Everything you might want to know about our meals, fresh
                        feeding and the Bowl & Bark experience.
                    </p>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className={styles.faqInner}>
                    <div className={styles.side}>
                        <SectionHeader
                            label="Answers"
                            title="The important stuff, explained simply."
                            align="left"
                        />

                        <div className={styles.contact}>
                            <span>
                                <FaEnvelope />
                            </span>

                            <div>
                                <strong>Still have a question?</strong>

                                <p>
                                    Send us a message and our team will be happy
                                    to help.
                                </p>

                                <a href="mailto:hello@bowlandbark.com">
                                    hello@bowlandbark.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.accordion}>
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <article
                                    key={faq.question}
                                    className={`${styles.item} ${
                                        isOpen ? styles.open : ""
                                    }`}
                                >
                                    <button
                                        type="button"
                                        className={styles.question}
                                        onClick={() => handleToggle(index)}
                                        aria-expanded={isOpen}
                                    >
                                        <span>
                                            <small>
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0",
                                                )}
                                            </small>

                                            {faq.question}
                                        </span>

                                        <FaChevronDown />
                                    </button>

                                    <div className={styles.answer}>
                                        <div>
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;

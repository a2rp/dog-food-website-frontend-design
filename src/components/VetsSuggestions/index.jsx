import { useState } from "react";
import { FaQuoteLeft, FaStar, FaStethoscope } from "react-icons/fa6";

import SectionHeader from "../SectionHeader";

import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";

import styles from "./styled.module.scss";

const vets = [
    {
        id: 1,
        name: "Dr. Lizzy Fan",
        role: "Veterinary nutrition advisor",
        image: image1,
        rating: 5,
        title: "Simple ingredients can make feeding easier to understand.",
        text: "A thoughtful diet starts with clarity. Fresh recipes, sensible portions and consistent feeding habits can help dog parents create a routine they understand and can maintain.",
    },
    {
        id: 2,
        name: "Dr. Maya Reed",
        role: "Companion animal veterinarian",
        image: image2,
        rating: 5,
        title: "Good everyday nutrition should feel practical.",
        text: "The best feeding approach is one that supports the dog's needs while remaining realistic for the family. Clear recipes and reliable portions make consistency much easier.",
    },
    {
        id: 3,
        name: "Dr. Noah Kim",
        role: "Pet wellness consultant",
        image: image3,
        rating: 5,
        title: "Consistency matters as much as quality.",
        text: "Dogs benefit from predictable routines. A straightforward meal plan with carefully selected ingredients can make everyday feeding simpler for both dogs and their humans.",
    },
];

const VetsSuggestions = () => {
    const [selectedVetId, setSelectedVetId] = useState(vets[0].id);

    const selectedVet = vets.find((vet) => vet.id === selectedVetId) || vets[0];

    return (
        <section className={styles.container}>
            <div className={styles.main}>
                <SectionHeader
                    label="Expert perspective"
                    title="Thoughtful food starts with thoughtful guidance."
                    text="Simple feeding advice and practical nutrition principles for happier everyday routines."
                />

                <div className={styles.content}>
                    <div className={styles.vets}>
                        {vets.map((vet) => (
                            <button
                                key={vet.id}
                                type="button"
                                className={`${styles.vet} ${
                                    selectedVetId === vet.id
                                        ? styles.active
                                        : ""
                                }`}
                                onClick={() => setSelectedVetId(vet.id)}
                            >
                                <span className={styles.vetImage}>
                                    <img src={vet.image} alt={vet.name} />
                                </span>

                                <span className={styles.vetInfo}>
                                    <strong>{vet.name}</strong>
                                    <small>{vet.role}</small>
                                </span>

                                <span className={styles.vetIcon}>
                                    <FaStethoscope />
                                </span>
                            </button>
                        ))}
                    </div>

                    <div key={selectedVet.id} className={styles.suggestion}>
                        <div className={styles.quoteIcon}>
                            <FaQuoteLeft />
                        </div>

                        <div className={styles.stars}>
                            {Array.from(
                                { length: selectedVet.rating },
                                (_, index) => (
                                    <FaStar key={index} />
                                ),
                            )}
                        </div>

                        <h3>{selectedVet.title}</h3>

                        <p>{selectedVet.text}</p>

                        <div className={styles.signature}>
                            <img src={selectedVet.image} alt="" />

                            <div>
                                <strong>{selectedVet.name}</strong>
                                <span>{selectedVet.role}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VetsSuggestions;

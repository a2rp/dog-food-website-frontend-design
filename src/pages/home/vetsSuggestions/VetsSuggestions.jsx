import React, { useEffect, useRef, useState } from 'react'
import styles from "./styles.module.scss";
import { FaStar } from 'react-icons/fa';
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";

const VetsSuggestions = () => {
    const vet1Ref = useRef(null);
    const vet2Ref = useRef(null);
    const vet3Ref = useRef(null);
    const [vetNumber, setVetNumber] = useState("vetOne");

    const handleVetClick = (value) => {
        if (vetNumber != null) {
            document.querySelector("." + vetNumber).style.cssText = `background-color: #fff8e8`;
        }
        document.querySelector("." + value).style.cssText = `background-color: #fff`;
        setVetNumber(value);
        document.querySelector(".suggestionsContainer").scrollIntoView();
    };

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>The best Vets will always suggest you our product</div>
                </div>

                <div className={styles.vetsSuggestionsContainer}>
                    <div className={styles.vetsContainer}>
                        <div
                            ref={vet1Ref}
                            className={`${styles.vet} vetOne`}
                            onClick={() => handleVetClick("vetOne")}
                        >
                            <div className={styles.imageContainer}>
                                <img src={image1} alt="" />
                            </div>
                            <div className={styles.textContainer}>
                                <div className={styles.name}>Dr. Lizzy Fan</div>
                                <div className={styles.profession}>Lorenz Farma</div>
                            </div>
                        </div>
                        <div
                            ref={vet2Ref}
                            className={`${styles.vet} vetTwo`}
                            onClick={() => handleVetClick("vetTwo")}
                        >
                            <div className={styles.imageContainer}>
                                <img src={image2} alt="" />
                            </div>
                            <div className={styles.textContainer}>
                                <div className={styles.name}>Dr. Lizzy Fan</div>
                                <div className={styles.profession}>Lorenz Farma</div>
                            </div>
                        </div>
                        <div
                            ref={vet3Ref}
                            className={`${styles.vet} vetThree`}
                            onClick={() => handleVetClick("vetThree")}
                        >
                            <div className={styles.imageContainer}>
                                <img src={image3} alt="" />
                            </div>
                            <div className={styles.textContainer}>
                                <div className={styles.name}>Dr. Lizzy Fan</div>
                                <div className={styles.profession}>Lorenz Farma</div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.suggestionsContainer} suggestionsContainer`}>
                        {vetNumber === "vetOne"
                            ? <div className={styles.suggestion}>
                                <div className={styles.suggestTitle}>One of the most exciting innovations in pet food</div>
                                <div className={styles.suggestStar}>
                                    <FaStar className={styles.starIcon} style={{ color: "gold" }} />
                                    <FaStar className={styles.starIcon} style={{ color: "gold" }} />
                                    <FaStar className={styles.starIcon} style={{ color: "gold" }} />
                                    <FaStar className={styles.starIcon} style={{ color: "gold" }} />
                                    <FaStar className={styles.starIcon} style={{ color: "gold" }} />
                                </div>
                                <div className={styles.suggestDetail}>
                                    "One of the most exciting innovations in pet food. The Farmer's Dog is a safe alternative to conventional brands. One of the most exciting innovations in pet food. The Farmer's Dog is a safe alternative to conventional brands.
                                    <br /><br />
                                    One of the most exciting innovations in pet food, The Farmer's Dog is a safe alternative."
                                </div>
                            </div>
                            : ""}
                        {vetNumber === "vetTwo"
                            ? <div className={styles.suggestion}>
                                <div className={styles.suggestTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                                <div className={styles.suggestStar}>
                                    <FaStar className={styles.starIcon} style={{ color: "gold" }} />
                                    <FaStar className={styles.starIcon} style={{ color: "gold" }} />
                                    <FaStar className={styles.starIcon} style={{ color: "gold" }} />
                                    <FaStar className={styles.starIcon} style={{ color: "gold" }} />
                                    <FaStar className={styles.starIcon} />
                                </div>
                                <div className={styles.suggestDetail}>
                                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, minus incidunt illo aliquam, unde nihil numquam ipsam perferendis doloribus sed fugiat tempora maiores eos nemo?
                                    <br /><br />
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, dolorem?."
                                </div>
                            </div>
                            : ""}
                        {vetNumber === "vetThree"
                            ? <div className={styles.suggestion}>
                                <div className={styles.suggestTitle}>unde nihil numquam ipsam perferendis doloribus sed fugiat</div>
                                <div className={styles.suggestStar}>
                                    <FaStar className={styles.starIcon} style={{ color: "gold" }} />
                                    <FaStar className={styles.starIcon} style={{ color: "gold" }} />
                                    <FaStar className={styles.starIcon} style={{ color: "gold" }} />
                                    <FaStar className={styles.starIcon} style={{ color: "gold" }} />
                                    <FaStar className={styles.starIcon} style={{ color: "gold" }} />
                                </div>
                                <div className={styles.suggestDetail}>
                                    "Repellendus, minus incidunt illo aliquam, unde nihil numquam ipsam perferendis doloribus sed fugiat tempora maiores eos nemo? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    <br /><br />
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, dolorem?."
                                </div>
                            </div>
                            : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VetsSuggestions

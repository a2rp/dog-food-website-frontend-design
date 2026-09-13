import { FaPaw } from "react-icons/fa6";

import styles from "./styled.module.scss";

const SectionHeader = ({
    label,
    title,
    text,
    align = "center",
    light = false,
}) => {
    return (
        <div
            className={`${styles.container} ${
                align === "left" ? styles.left : styles.center
            } ${light ? styles.light : ""}`}
        >
            {label && (
                <div className={styles.label}>
                    <FaPaw />
                    <span>{label}</span>
                </div>
            )}

            <h2>{title}</h2>

            {text && <p>{text}</p>}
        </div>
    );
};

export default SectionHeader;

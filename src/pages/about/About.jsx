import React from "react";
import styles from "./styles.module.scss";
import image1 from "./images/image-about.png";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.col1}>
                    <div className={styles.whoWeAre}>WHO WE ARE</div>
                    <div className={styles.aboutUs}>ABOUT <span className={styles.us}>US</span></div>

                    <div className={styles.para1}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium aliquam corrupti vero amet suscipit nulla harum, illo saepe aliquid alias tempora eveniet omnis tenetur recusandae eius, officiis quae, culpa laboriosam.</div>

                    <div className={styles.para2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, cum inventore. Sapiente harum corrupti quibusdam deleniti? Esse debitis dignissimos rem est cum nostrum aspernatur commodi quam fuga. Aliquid quae ipsum quam eos, voluptates suscipit. Quos, magni inventore ipsa vero excepturi enim optio debitis accusantium, corrupti nam provident voluptatibus obcaecati incidunt.</div>

                    <div className={styles.readMore}>READ MORE</div>
                </div>
                <div className={styles.col2}>
                    <img src={image1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About


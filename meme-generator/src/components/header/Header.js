import React from "react";
import styles from "./header.module.css";
import { GiWizardFace } from "react-icons/gi";

const Header = () => {
    return (
        <div className={styles.main}>
            <div className={styles.logo}>
                <h1>
                    <GiWizardFace className={styles.wizard} />
                </h1>
                <h1>
                    <span className={styles.logo_text}>Meme Generator</span>
                </h1>
            </div>
        </div>
    );
};

export default Header;

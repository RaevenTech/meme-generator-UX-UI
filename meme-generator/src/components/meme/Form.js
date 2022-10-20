import React from "react";
import styles from "./form.module.css";
import { FcAddImage } from "react-icons/fc";

const Form = () => {
    return (
        <div className={styles.form_container}>
            {" "}
            <div className={styles.inputs}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Top text"
                />
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Bottom text"
                />
            </div>
            <button className={styles.image_btn}>
                <span className={styles.btn_txt}>Get a new meme image</span>{" "}
                <FcAddImage className={styles.btn_icon} />
            </button>
        </div>
    );
};

export default Form;

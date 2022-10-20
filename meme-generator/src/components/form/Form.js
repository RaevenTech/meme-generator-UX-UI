import React from "react";
import styles from "./form.module.css";
import { FcAddImage } from "react-icons/fc";

const Form = () => {
    return (
        <form className={styles.form_container}>
            {" "}
            <div>
                <input type="text" className={styles.inputs} />
                <input type="text" className={styles.inputs} />
            </div>
            <button>
                Get a new meme image <FcAddImage />
            </button>
        </form>
    );
};

export default Form;

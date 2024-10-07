import React from "react";
import styles from "./CardCardapio.module.css";

const CardCardapio = () => {
    return (
        <div className={styles["row"]}>
            <div className={styles["card"]}>
                <div className={styles["imagem"]}>
                    <img src="" alt="" />
                </div>
                <div className={styles["details"]}>
                    <h3 className={styles["h3_cardCardapio"]}>Bolo de Morango</h3>
                    <h5 className={styles["h5_cardCardapio"]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur accusamus vero quas eius exercitationem quasi itaque cum totam?</h5>
                </div>
                <div className={styles["price"]}>
                    <h2>R$ 89,90</h2>
                    <button className={styles["buttonEdit"]}>Modificar Bolo</button>
                </div>
            </div>
            <div className={styles["card"]}>
                <div className={styles["imagem"]}>
                    <img src="" alt="" />
                </div>
                <div className={styles["details"]}>
                    <h3>Bolo de Morango</h3>
                    <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur accusamus vero quas eius exercitationem quasi itaque cum totam?</h5>
                </div>
                <div className={styles["price"]}>
                    <h2>R$ 89,90</h2>
                    <button className={styles["buttonEdit"]}>Modificar Bolo</button>
                </div>
            </div>
            <div className={styles["card"]}>
                <div className={styles["imagem"]}>
                    <img src="" alt="" />
                </div>
                <div className={styles["details"]}>
                    <h3>Bolo de Morango</h3>
                    <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur accusamus vero quas eius exercitationem quasi itaque cum totam?</h5>
                </div>
                <div className={styles["price"]}>
                    <h2>R$ 89,90</h2>
                    <button className={styles["buttonEdit"]}>Modificar Bolo</button>
                </div>
            </div>
        </div>
    );
};

export default CardCardapio;
import React from "react";
import styles from "./CardCardapio.module.css";
import { useNavigate } from "react-router-dom";

const CardCardapio = () => {
    const navigate = useNavigate(); // Hook do React Router para navegação

    const handleEditCakeClick = () => {
        navigate('/modificar-bolo'); // Navega para a página /about
    };

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
                    <button className={styles["buttonEdit"]} onClick={handleEditCakeClick}>Modificar Bolo</button>
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
                    <button className={styles["buttonEdit"]} onClick={handleEditCakeClick}>Modificar Bolo</button>
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
                    <button className={styles["buttonEdit"]} onClick={handleEditCakeClick}>Modificar Bolo</button>
                </div>
            </div>
        </div>
    );
};

export default CardCardapio;
import React from "react";
import styles from "./CardCardapio.module.css";

const CardCardapio = () => {
    <div className={styles["card"]}>
        <div className="img">
            <img src="" alt="" />
        </div>
        <div className="details">
            <h2>Bolo de Morango</h2>
            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur accusamus vero quas eius exercitationem quasi itaque cum totam? Dicta sequi nihil corporis facilis. Modi expedita architecto id porro sapiente illo.</h5>
        </div>
        <div className="price">
            <h2>R$ 89,90</h2>
            <button>Modificar Bolo</button>
        </div>
    </div>
};

export default CardCardapio;
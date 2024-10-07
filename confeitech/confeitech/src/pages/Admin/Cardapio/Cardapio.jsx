import React from "react";
import styles from "./Cardapio.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import CardCardapio from "../../../components/CardCardapio/CardCardapio";

const Cardapio = () => {
    return (
        <>
            <NavBarAdmin />
            <div className={styles["cardapio"]}>
                <div className={styles["content"]}>
                    <div className={styles["text"]}>
                        <span className={styles["span_cardapio"]}>
                            <h1 className={styles["h1_cardapio"]}>Cardápio de Delicias</h1>
                            <button className={styles["button_cardapio"]}>NOVO BOLO +</button>
                        </span>
                    </div>
                    <div className={styles["table"]}>
                        <CardCardapio />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cardapio;
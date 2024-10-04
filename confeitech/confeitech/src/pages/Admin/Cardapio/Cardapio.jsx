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
                        <span>
                            <h1>Cardápio de Delicias</h1>
                            <button>NOVO BOLO +</button>
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
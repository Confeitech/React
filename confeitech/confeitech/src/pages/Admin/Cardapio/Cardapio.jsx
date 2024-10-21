import React from "react";
import styles from "./Cardapio.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import CardCardapio from "../../../components/CardCardapio/CardCardapio";
import { useNavigate } from "react-router-dom";

const Cardapio = () => {
    const navigate = useNavigate(); // Hook do React Router para navegação

    const handleClick = () => {
        navigate('/novo-bolo'); // Navega para a página /about
    };
    


    return (
        <div className={styles["body"]}>
            <NavBarAdmin className={styles["Nav"]}/>
            <div className={styles["cardapio"]}>
                <div className={styles["content"]}>
                    <div className={styles["text"]}>
                        <span className={styles["span_cardapio"]}>
                        </span>
                        <span className={styles["span_cardapio"]}>
                            <h1 className={styles["h1_cardapio"]}>Cardápio de Delicias</h1>
                        </span>
                        <span className={styles["span_cardapioRight"]}>
                            <button className={styles["button_cardapio"]} onClick={handleClick}>NOVO BOLO +</button>
                        </span>
                    </div>
                    <div className={styles["table"]}>
                        <CardCardapio />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cardapio;
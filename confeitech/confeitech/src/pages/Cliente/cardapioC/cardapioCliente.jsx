import React from "react";
import styles from "../cardapioC/cardapioCliente.module.css";
import NavBarCliente from "../../../components/NavBarCliente/NavBarCliente";
import coroa from "../../../utils/Detalhes/coroa.png";
import pesquisa from "../../../utils/Detalhes/pesquisa.png"
import CardCliente from "../../../components/CardCardapioCliente/CardCardapioCliente"

const CardapioCliente = () => {
    return (
        <>
            <NavBarCliente />
            <div className={styles["cardapio"]}>
                <div className={styles["content"]}>
                    <div className={styles["text"]}>
                        <span className={styles["span_cardapio"]}>
                            <input className={styles["barra"]} placeholder="Ola, o que você deseja pesquisar?" />                       <img className={styles["pesquisa"]} src={pesquisa} />
                        </span>

                        <span className={styles["span_cardapio2"]}>
                            <img className={styles["coroa"]} src={coroa} />
                            <h1 className={styles["h1_cardapio"]}>Cardápio de Delicias</h1>
                        </span>
                    </div>
                    <div className={styles["table"]}>
                        <CardCliente />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardapioCliente;
import React from "react";
import styles from "./CardEncomendaSolicitacao.module.css";

const CardEncomendaSolicitacao = () => {
    return (
        <div className={styles["card"]}>
            <div className={styles["image"]}>
                <img src="" alt="Bolo de chocolate" />
            </div>
            <div className={styles["info"]}>
                <h3>Bolo de chocolate</h3>
                <div className={styles["description"]}>
                    <h5>Cliente: João da Silva</h5>
                    <h5>Descrição: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae aliquam pariatur voluptates ea molestias.</h5>
                    <h5>Data do pedido: 25/12/2025</h5>
                    <h5 style={{ color: "red" }}>PREVISTO PARA RETIRADA: : 25/12/2025</h5>
                </div>
            </div>
            <div className={styles["edit"]}>
                <h3>R$ 89,90</h3>
                <span>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </span>
            </div>
        </div>
    );
};

export default CardEncomendaSolicitacao;
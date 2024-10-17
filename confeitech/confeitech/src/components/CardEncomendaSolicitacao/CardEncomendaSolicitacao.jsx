import React from "react";
import styles from "./CardEncomendaSolicitacao.module.css";
import check from "../../utils/assets/verifica.png";
import cancel from "../../utils/assets/cancelar.png";

const CardEncomendaSolicitacao = () => {
    return (
        <div className={styles["card"]}>
            <div className={styles["image"]}>
                <img src="" alt="Bolo de chocolate" />
            </div>
            <div className={styles["info"]}>
                <h3 className={styles["h3_info"]}>Bolo de chocolate</h3>
                <div className={styles["description"]}>
                    <h5 className={styles["h5_description"]}>Cliente: João da Silva</h5>
                    <h5 className={styles["h5_description"]}>Descrição: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae aliquam pariatur voluptates ea molestias.</h5>
                    <h5 className={styles["h5_description"]}>Data do pedido: 25/12/2025</h5>
                    <h5 className={styles["h5_description"]} style={{ color: "red" }}>PREVISTO PARA RETIRADA: : 25/12/2025</h5>
                </div>
            </div>
            <div className={styles["edit"]}>
                <div className={styles["ajeitar"]}>
                    <h3 className={styles["h3_edit"]}>R$ 89,90</h3>
                    <div className={styles["check"]}>
                        <div className={styles["fix"]}>
                            <div className={styles["colum"]}>
                                <h5 style={{ color: "green" }}>Aceitar</h5>
                                <img src={check} alt="Check" className={styles["imagens"]} />
                            </div>
                            <div className={styles["colum"]}>
                                <h5 style={{ color: "red" }}>Rejeitar</h5>
                                <img src={cancel} alt="Cancel" className={styles["imagens"]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardEncomendaSolicitacao;
import React, { useState } from "react";
import styles from "./RelatorioAdmin.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";

const RelatorioAdmin = () => {
    return (
        <div className={styles["body"]}>
            <NavBarAdmin />
            <div className={styles["content"]}>
                <div className={styles["field"]}>
                    <div className={styles["row"]}>
                        <div className={styles["card"]}>
                            <div className={styles["block"]}>
                                <h4 className={styles["titulo"]}>Quantidade de encomendas para hoje</h4>
                                <h1 className={styles["textoAmarelo"]}>10</h1>
                                <h5 className={styles["textoAmarelo"]}>Quantidade proxima do limite</h5>
                            </div>
                        </div>
                        <div className={styles["card"]}>
                            <div className={styles["block"]}>
                                <h4 className={styles["titulo"]}>Quantidade de encomendas para hoje</h4>
                                <h1 className={styles["textoAzul"]}>10</h1>
                                <a className={styles["link"]}>Quantidade proxima do limite</a>
                            </div>
                        </div>
                        <div className={styles["card"]}></div>
                    </div>
                    <div className={styles["row"]}>
                        <div className={styles["card"]}>
                            <div className={styles["block"]}>
                                <h4 className={styles["titulo"]}>Maior movimentação de encomendas</h4>
                                <h2 className={styles["textoAzul"]}>Segunda-Feira</h2>
                            </div>
                        </div>
                        <div className={styles["card"]}>
                            <div className={styles["block"]}>
                                <h4 className={styles["titulo"]}>Quantidade de encomendas na semana</h4>
                                <h1 className={styles["textoVerde"]}>30</h1>
                                <h5 className={styles["textoVerde"]}>Cresceu 12% com base na semana anterior</h5>
                            </div>
                        </div>
                        <div className={styles["card"]}>
                            <div className={styles["block"]}>
                                <h4 className={styles["titulo"]}>Bolo mais vendido</h4>
                                <h2 className={styles["textoAzul"]}>Chocolate</h2>
                            </div>
                        </div>
                    </div>
                    <div className={styles["big"]}>
                        <div className={styles["grafico"]}></div>
                        <div className={styles["grafico"]}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatorioAdmin;
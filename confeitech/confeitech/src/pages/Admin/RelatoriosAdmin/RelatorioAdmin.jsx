import React, { useState } from "react";
import styles from "./RelatorioAdmin.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";

const RelatorioAdmin = () => {
    return (
        <>
            <NavBarAdmin />
            <div className={styles["content"]}>
                <div className={styles["field"]}>
                    <div className={styles["fieldLeft"]}>
                        <div className={styles["group"]}>
                            <h2>Relatórios</h2>
                            <h4>Visualize a quantidade de vendas por dia ou semana</h4>
                        </div>
                        <div className={styles["grafico"]}>

                        </div>
                        <h4>Bolos mais vendidos</h4>
                        <div className={styles["grafico"]}>

                        </div>
                    </div>
                    <div className={styles["fieldRight"]}>
                        <div className={styles["groupRight"]}>
                            <h3>Maior movimentação de encomendas</h3>
                            <span className={styles["infoRelatorio"]}>
                                Durante a semana sua venda de bolos cresceu principalmente nos dias DOMINGO e QUARTA-FEIRA
                            </span>
                        </div>
                        <div className={styles["groupRight"]}>
                            <h3>Quantidade total de encomendas na semana</h3>
                            <span className={styles["infoRelatorio"]}>
                                76 encomendas
                            </span>
                        </div>
                        <div className={styles["groupRight"]}>
                            <h3>Bolo mais pedido da semana</h3>
                            <span className={styles["infoRelatorio"]}>
                                Bolo de Morango com Chocolate
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RelatorioAdmin;
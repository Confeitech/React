import React, { useState } from "react";
import styles from "./Encomendas.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import CardEncomendaAceita from "../../../components/CardEncomendaAceita/CardEncomendaAceita";
import CardEncomendaSolicitacao from "../../../components/CardEncomendaSolicitacao/CardEncomendaSolicitacao";

const Aceitas = () => {
    return <CardEncomendaAceita />;
};

const Solicitacoes = () => {
    return <CardEncomendaSolicitacao/>;
};

const Encomendas = () => {
    const [currentView, setCurrentView] = useState("aceitas");

    return (
        <>
            <NavBarAdmin />
            <div className={styles["encomendas"]}>
                <div className={styles["content"]}>
                    <div className={styles["text"]}>
                        <h1 className={styles["principal"]}>Encomendas</h1>
                        <div className={styles["options"]}>
                            <h4 className={currentView === "solicitacoes" ? styles["active"] : styles["inactive"]} onClick={() => setCurrentView("solicitacoes")}>Solicitações</h4>
                            <h3 className={styles["mid"]}>|</h3>
                            <h4 className={currentView === "aceitas" ? styles["active"] : styles["inactive"]} onClick={() => setCurrentView("aceitas")}>Aceitas</h4>
                        </div>
                        <h5 className={styles["bordao"]}>Visualize e edite o status de cada uma das suas encomendas em andamento</h5>
                    </div>
                    <div className={styles["table"]}>
                        {currentView === "solicitacoes" ? <Solicitacoes /> : <Aceitas />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Encomendas;


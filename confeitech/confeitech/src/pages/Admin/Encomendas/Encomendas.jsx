import React, { useState, useEffect } from "react";
import styles from "./Encomendas.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import CardEncomendaAceita from "../../../components/CardEncomendaAceita/CardEncomendaAceita";
import CardEncomendaSolicitacao from "../../../components/CardEncomendaSolicitacao/CardEncomendaSolicitacao";
import api from "../../../api";
import { toast, ToastContainer } from "react-toastify";


const Encomendas = () => {
    const [aceitasData, setAceitasData] = useState();
    const [solicitacaoData, setSolicitacaoData] = useState();
    const [currentView, setCurrentView] = useState("aceitas");

    const getSolicitacao = () => {
        api
            .get("/encomendas/aguardando")
            .then((response) => {
                const { data } = response;
                console.log(data);
                console.log("batata")
                setSolicitacaoData(data);
                showSolicitacoes();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const getAceita = () => {
        api
            .get("/encomendas/aceitas")
            .then((response) => {
                const { data } = response;
                console.log(data);
                console.log("tomate")
                setAceitasData(data);
                showAceitas();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const showAceitas = () => {
        if (aceitasData) {
            if (Array.isArray(aceitasData)) {
                return aceitasData?.map((data, index) => (
                    <CardEncomendaAceita key={index} id={data.id} status={data.andamento} nomeBolo={data.bolo.nome} nomeCliente={data.userDTO.nome} descricao={data.bolo.descricao} dataPedido={data.dataCriacao} dataRetirada={data.dataRetirada} preco={data.preco} getAceita={getAceita} />
                ));
            }
        }
    };

    const showSolicitacoes = () => {
        if (solicitacaoData) {
            if (Array.isArray(solicitacaoData)) {
                console.log("batata")
                return solicitacaoData?.map((data, index) => (
                    <CardEncomendaSolicitacao key={index} index={data.id} nomeBolo={data.bolo.nome} nomeCliente={data.userDTO.nome} descricao={data.bolo.descricao} dataPedido={data.dataCriacao} dataRetirada={data.dataRetirada} preco={data.preco} getSolicitacao={getSolicitacao}
                    />
                ));
            }
        }
    };

    useEffect(() => {
        if (currentView === "aceitas") {
            getAceita();
        } else {
            getSolicitacao();
        }
    }, [currentView, CardEncomendaAceita, CardEncomendaSolicitacao, toast, ToastContainer, toast.success, toast.error]);


    return (
        <div className={styles["body"]}>
            <NavBarAdmin />
            <div className={styles["encomendas"]}>
                <div className={styles["content"]}>
                    <div className={styles["text"]}>
                        <div className={styles["optionsTop"]}>
                            <h1 className={styles["principal"]}>Encomendas</h1>
                        </div>
                        <div className={styles["options"]}>
                            <h4 className={currentView === "solicitacoes" ? styles["active"] : styles["inactive"]} onClick={() => setCurrentView("solicitacoes")}>Solicitações</h4>
                            <h3 className={styles["mid"]}>|</h3>
                            <h4 className={currentView === "aceitas" ? styles["active"] : styles["inactive"]} onClick={() => setCurrentView("aceitas")}>Aceitas</h4>
                        </div>
                        <div className={styles["optionsBottom"]}>
                            <h5 className={styles["bordao"]}>Visualize e edite o status de cada uma das suas encomendas em andamento</h5>
                        </div>
                    </div>
                    <div className={styles["table"]}>
                        {currentView === "solicitacoes" ?
                            showSolicitacoes()
                            :
                            showAceitas()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Encomendas;


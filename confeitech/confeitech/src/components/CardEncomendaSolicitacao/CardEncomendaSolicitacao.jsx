import React from "react";
import styles from "./CardEncomendaSolicitacao.module.css";
import check from "../../utils/assets/verifica.png";
import cancel from "../../utils/assets/cancelar.png";
import api from "../../api";
import { ToastContainer, toast } from "react-toastify";

const CardEncomendaSolicitacao = ({ index, nomeBolo, nomeCliente, descricao, dataPedido, dataRetirada, preco, getSolicitacao}) => {
    const tornarAceita = () => {
        console.log(index);
        api
            .patch("/encomendas/" + index, { andamentoEncomenda: "EM_PREPARO" })
            .then(() => {
                toast.success("Pedido aceito!");
                if (typeof getSolicitacao === "function") {
                    getSolicitacao();
                }
            })
            .catch((error) => {
                if (error.response && error.response.status >= 200 && error.response.status < 300) {
                    // Caso a API retorne um código de sucesso tratado como erro
                    console.log("Resposta de sucesso tratada como erro:", error.response);
                } else {
                    console.error("Erro real:", error);
                    toast.error("Erro ao aceitar pedido!");
                }
            });
    }

    const recusarSolicitacao = () => {
        api
            .patch("/encomendas/" + index, {
                andamentoEncomenda: "CANCELADA",
            })
            .then(() => {
                toast.success("Pedido cancelado!");
                if (typeof getSolicitacao === "function") {
                    getSolicitacao();
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error("Erro ao cancelar pedido!");
            });
    }

    return (
        <div className={styles["card"]}>
            <div className={styles["image"]}>
                <img src="" alt="Bolo de chocolate" />
            </div>
            <div className={styles["info"]}>
                <h3 className={styles["h3_info"]}>{nomeBolo}</h3>
                <div className={styles["description"]}>
                    <h5 className={styles["h5_description"]}>Cliente: {nomeCliente}</h5>
                    <h5 className={styles["h5_description"]}>Descrição: {descricao}</h5>
                    <h5 className={styles["h5_description"]}>Data do pedido: {dataPedido}</h5>
                    <h5 className={styles["h5_description"]} style={{ color: "red" }}>PREVISTO PARA RETIRADA: : {dataRetirada}</h5>
                </div>
            </div>
            <div className={styles["edit"]}>
                <div className={styles["ajeitar"]}>
                    <h3 className={styles["h3_edit"]}>R$ {preco}</h3>
                    <div className={styles["check"]}>
                        <div className={styles["fix"]}>
                            <div className={styles["colum"]} onClick={() => tornarAceita()}>
                                <h5 style={{ color: "green" }}>Aceitar</h5>
                                <img src={check} alt="Check" className={styles["imagens"]} />
                            </div>
                            <div className={styles["colum"]} onClick={() => recusarSolicitacao()}>
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
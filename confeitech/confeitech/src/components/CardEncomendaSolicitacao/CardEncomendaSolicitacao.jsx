import React from "react";
import styles from "./CardEncomendaSolicitacao.module.css";
import check from "../../utils/assets/verifica.png";
import cancel from "../../utils/assets/cancelar.png";
import api from "../../api";

const CardEncomendaSolicitacao = ({id, nomeBolo, nomeCliente, descricao, dataPedido, dataRetirada, preco}) => {
    const tornarAceita = () => {
        api
        .patch("/encomendas/" + id, {
          andamentoEncomenda: "EM_PREPARO",
        })
        .then(() => {
          console.log("oi");
          sessionStorage.removeItem("index");
          window.location.href = "/encomendas";
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
    const recusarSolicitacao = () => {
        api
        .delete("/encomendas/" + id, {
          andamentoEncomenda: "EM_PREPARO",
        })
        .then(() => {
          console.log("oi");
          sessionStorage.removeItem("index");
          window.location.href = "/encomendas";
        })
        .catch((error) => {
          console.log(error);
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
                            <div className={styles["colum"]} onClick={()=> tornarAceita()}>
                                <h5 style={{ color: "green" }}>Aceitar</h5>
                                <img src={check} alt="Check" className={styles["imagens"]} />
                            </div>
                            <div className={styles["colum"]} onClick={()=> recusarSolicitacao()}>
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
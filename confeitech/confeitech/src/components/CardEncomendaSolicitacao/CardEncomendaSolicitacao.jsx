import React, { useState, useEffect } from "react";
import styles from "./CardEncomendaSolicitacao.module.css";
import check from "../../utils/assets/verifica.png";
import cancel from "../../utils/assets/cancelar.png";
import api from "../../api";
import { ToastContainer, toast } from "react-toastify";

const CardEncomendaSolicitacao = ({ index, indexBolo, nomeBolo, nomeCliente, descricao, dataPedido, dataRetirada, preco, peso, adicionais, getSolicitacao }) => {
    const [image, setimage] = useState();

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

    useEffect(() => {
        api
            .get("/cakes/imagem/" + indexBolo, { responseType: "blob" })  // Alterado para GET e responseType "blob"
            .then((response) => {
                const imageUrl = URL.createObjectURL(response.data);  // Cria uma URL a partir do Blob
                setimage(imageUrl);  // Armazena a URL no estado
                console.log(imageUrl);
            })
            .catch((error) => {
                console.error("Erro ao buscar a imagem:", error);
            });

        console.log("Index: ", index);
    }, [index]);


    return (
        <div className={styles["card"]}>
            <div className={styles["image"]}>
                <img className={styles["imagemBolo"]} src={image} alt="Bolo de chocolate" />
            </div>
            <div className={styles["info"]}>
                <h3 className={styles["h3_info"]}>{nomeBolo}</h3>
                <div className={styles["description"]}>
                    <h5 className={styles["h5_description"]}>Cliente: {nomeCliente}</h5>
                    <h5 className={styles["h5_description"]}>Descrição: {descricao || "Sem observações"}</h5>
                    <h5 className={styles["h5_description"]}>Peso: {peso || "1"}kg</h5>
                    <h5 className={styles["h5_description"]}>Adicionais: {adicionais || "Sem observações"}</h5>
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
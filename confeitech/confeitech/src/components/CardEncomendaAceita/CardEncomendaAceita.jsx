import React, { useState } from "react";
import styles from "./CardEncomendaAceita.module.css";
import imgBolo from "../../utils/assets/fatia-de-bolo-de-chocolate-recheado-com-creme-marrom-e-morango-por-cima_993044-36.avif";
import imgBolo2 from "../../utils/assets/bolo-com-dois-recheios-em-pedaço.jpg.webp";
import api from "../../api";
import { ToastContainer, toast } from "react-toastify";

const CardEncomendaAceita = (
  { id, status, nomeBolo, nomeCliente, descricao, dataPedido, dataRetirada, preco, getAceita }
) => {
  const [openModal, setOpenModal] = useState(false);
  const [indiceCor, setIndiceCor] = useState(1);
  const colors = ["#5CE45C", "#B89300", "#000", "#FF0000"];
  let situação;

  const handleStatus = (numero) => {
    if (numero === 1) situação = "PRONTA";
    else if (numero === 2) situação = "EM_PREPARO";
    else if (numero === 3) situação = "AGUARDANDO"
    else situação = "CANCELADA";

    api
      .patch("/encomendas/" + id, { andamentoEncomenda: situação })
      .then(() => {
        toast.success("Status de pedido alterado!");
        // Chama a função para atualizar os dados das encomendas aceitas
        if (typeof getAceita === "function") {
          getAceita();
        }
      })
      .catch((error) => {
        console.error("Erro real:", error);
        toast.error("Erro ao alterar o status do pedido!");
      });
    setOpenModal(false);
  };

  const Dialog = ({ isOpen }) => {
    if (isOpen) {
      return (
        <>
          <div className={styles["backModal"]}></div>
          <div className={styles["contentModal"]}>
            <h2 className={styles["h2_status"]}>Alterar Status</h2>
            <button
              className={styles["buttonConcluidoModal"]}
              onClick={() => handleStatus(1)}
            >
              Concluido
            </button>
            <button
              className={styles["buttonPreparacaoModal"]}
              onClick={() => handleStatus(2)}
            >
              Em Andamento
            </button>
            <button
              className={styles["buttonPendenteModal"]}
              onClick={() => handleStatus(3)}
            >
              Pendente
            </button>
            <button
              className={styles["buttonCancelarModal"]}
              onClick={() => handleStatus(4)}
            >
              Cancelar Pedido
            </button>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <>
      <div className={styles["card"]}>
        <div className={styles["image"]}>
          <img
            className={styles["imagemBolo"]}
            src={imgBolo}
            alt="Bolo de chocolate"
          />
        </div>
        <div className={styles["info"]}>
          <h3 className={styles["h3_cardEncomenda"]}>{nomeBolo}</h3>
          <div className={styles["description"]}>
            <h5 className={styles["h5_cardEncomenda"]}>
              Cliente: {nomeCliente}
            </h5>
            <h5 className={styles["h5_cardEncomenda"]}>
              {descricao}
            </h5>
            <h5 className={styles["h5_cardEncomenda"]}>
              Data do pedido: {dataPedido}
            </h5>
            <h5 className={styles["h5_cardEncomendaRed"]}>
              PREVISTO PARA RETIRADA: : {dataRetirada}
            </h5>
          </div>
        </div>
        <div className={styles["edit"]}>
          <h3 className={styles["h3_edit"]}>R$ {preco}</h3>
          <h3 className={styles["status"]} style={{ color: colors[indiceCor] }}>
            {status}
          </h3>
          <span className={styles["span_button"]}>
            <button
              className={styles["buttonEdit"]}
              onClick={() => setOpenModal(true)}
            >
              Alterar status
            </button>
          </span>
        </div>
        <Dialog isOpen={openModal} />
      </div>
    </>
  );
};

export default CardEncomendaAceita;

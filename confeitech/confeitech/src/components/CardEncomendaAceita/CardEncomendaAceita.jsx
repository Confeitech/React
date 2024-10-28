import React, { useState } from "react";
import styles from "./CardEncomendaAceita.module.css";
import imgBolo from "../../utils/assets/fatia-de-bolo-de-chocolate-recheado-com-creme-marrom-e-morango-por-cima_993044-36.avif";
import imgBolo2 from "../../utils/assets/bolo-com-dois-recheios-em-pedaço.jpg.webp";

const CardEncomendaAceita = () => {
  const [openModal, setOpenModal] = useState(false);

  const [status, setStatus] = useState("Em Andamento");
  const [indiceCor, setIndiceCor] = useState(1);
  const colors = ["#5CE45C", "#B89300", "#000", "#FF0000"];

  const handleStatus = (numero) => {
    if (numero === 1) setStatus("Concluido");
    else if (numero === 2) setStatus("Em Andamento");
    else if (numero === 3) setStatus("Pendente");
    else if (numero === 4) setStatus("Pedido Cancelado");
    setIndiceCor(numero - 1);
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
          <h3 className={styles["h3_cardEncomenda"]}>Bolo de chocolate</h3>
          <div className={styles["description"]}>
            <h5 className={styles["h5_cardEncomenda"]}>
              Cliente: João da Silva
            </h5>
            <h5 className={styles["h5_cardEncomenda"]}>
              Descrição: Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Molestiae aliquam pariatur voluptates ea molestias.
            </h5>
            <h5 className={styles["h5_cardEncomenda"]}>
              Data do pedido: 25/12/2025
            </h5>
            <h5 className={styles["h5_cardEncomendaRed"]}>
              PREVISTO PARA RETIRADA: : 25/12/2025
            </h5>
          </div>
        </div>
        <div className={styles["edit"]}>
          <h3 className={styles["h3_edit"]}>R$ 89,90</h3>
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
      <div className={styles["card"]}>
        <div className={styles["image"]}>
          <img
            className={styles["imagemBolo"]}
            src={imgBolo2}
            alt="Bolo de chocolate"
          />
        </div>
        <div className={styles["info"]}>
          <h3 className={styles["h3_cardEncomenda"]}>Bolo de chocolate</h3>
          <div className={styles["description"]}>
            <h5 className={styles["h5_cardEncomenda"]}>
              Cliente: João da Silva
            </h5>
            <h5 className={styles["h5_cardEncomenda"]}>
              Descrição: Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Molestiae aliquam pariatur voluptates ea molestias.
            </h5>
            <h5 className={styles["h5_cardEncomenda"]}>
              Data do pedido: 25/12/2025
            </h5>
            <h5 className={styles["h5_cardEncomendaRed"]}>
              PREVISTO PARA RETIRADA: : 25/12/2025
            </h5>
          </div>
        </div>
        <div className={styles["edit"]}>
          <h3 className={styles["h3_edit"]}>R$ 89,90</h3>
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
      <div className={styles["card"]}>
        <div className={styles["image"]}>
          <img src="" alt="Bolo de chocolate" />
        </div>
        <div className={styles["info"]}>
          <h3 className={styles["h3_cardEncomenda"]}>Bolo de chocolate</h3>
          <div className={styles["description"]}>
            <h5 className={styles["h5_cardEncomenda"]}>
              Cliente: João da Silva
            </h5>
            <h5 className={styles["h5_cardEncomenda"]}>
              Descrição: Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Molestiae aliquam pariatur voluptates ea molestias.
            </h5>
            <h5 className={styles["h5_cardEncomenda"]}>
              Data do pedido: 25/12/2025
            </h5>
            <h5 className={styles["h5_cardEncomendaRed"]}>
              PREVISTO PARA RETIRADA: : 25/12/2025
            </h5>
          </div>
        </div>
        <div className={styles["edit"]}>
          <h3 className={styles["h3_edit"]}>R$ 89,90</h3>
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

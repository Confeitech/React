import React, { useEffect, useState } from "react";
import api from "../../../api";
import styles from "./MinhasEncomendas.module.css";
import NavBarCliente from "../../../components/NavBarCliente/NavBarCliente";
import coroa from "../../../utils/Detalhes/coroa.png";
import bolo from "../../../utils/Detalhes/Bolo-Sensacao-01.webp";
import CancelarPedidoModal from "../../Cliente/MinhasEncomendasC/CancelarPedido/CancelarPedidoModal";

const MinhasEncomendas = () => {
  const [cardsData, setCardsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPedidoId, setSelectedPedidoId] = useState(null); // Estado para armazenar o ID do pedido selecionado

  // Função para buscar os dados da API
  const recuperarValorDoCardum = () => {
    api
      .get("/carrinhos")
      .then((response) => {
        const { data } = response;
        setCardsData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    recuperarValorDoCardum();
  }, []);

  // Abre o modal e define o ID do pedido selecionado
  const handleOpenModal = (pedidoId) => {
    setSelectedPedidoId(pedidoId);
    setIsModalOpen(true);
  };

  // Fecha o modal e limpa o ID selecionado
  const handleCloseModal = () => {
    setSelectedPedidoId(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <NavBarCliente />
      <div className={styles["cardapio"]}>
        <div className={styles["content"]}>
          <div className={styles["text"]}>
            <span className={styles["span_cardapio2"]}>
              <img className={styles["coroa"]} src={coroa} alt="Coroa" />
              <h1 className={styles["h1_cardapio"]}>Minhas Encomendas</h1>
            </span>
          </div>

          {cardsData.length > 0 ? (
            cardsData.map((data) => (
              <div className={styles["encomendasPai"]} key={data.id}>
                <img
                  className={styles["bolofoto"]}
                  src={bolo}
                  alt={`Bolo ${data.nome}`}
                />
                <div className={styles["information"]}>
                  <p className={styles["bolin"]}>{data.nome}</p>
                  <p className={styles["pretin"]}>
                    Data de Encomenda: {data.dataCompra}
                  </p>
                  <p className={styles["pretin"]}>
                    Data de Retirada: {data.dataRetirada}
                  </p>
                  <p className={styles["pretin"]}>
                    Status de Encomenda: {data.status || "Pendente"}
                  </p>
                  <p className={styles["pretin"]}>
                    Local de Retirada: {data.localRetirada || "Não informado"}
                  </p>
                </div>
                <div className={styles["name"]}>
                  <p className={styles["total"]}>
                    TOTAL: R$ {data.preco?.toFixed(2) || "0.00"}
                  </p>
                  <button
                    className={styles["cancelarPedido"]}
                    onClick={() => handleOpenModal(data.id)} // Passa o ID do pedido ao abrir o modal
                  >
                    Cancelar Pedido
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Você ainda não possui encomendas cadastradas.</p>
          )}

          {/* Modal de cancelamento */}
          <CancelarPedidoModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            pedidoId={selectedPedidoId} // Passa o ID do pedido selecionado
          />
        </div>
      </div>
    </>
  );
};

export default MinhasEncomendas;

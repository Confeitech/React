import React, { useEffect, useState } from "react";
import api from "../../../api";
import styles from "./MinhasEncomendas.module.css";
import NavBarCliente from "../../../components/NavBarCliente/NavBarCliente";
import coroa from "../../../utils/Detalhes/coroa.png";
import CancelarPedidoModal from "../../Cliente/MinhasEncomendasC/CancelarPedido/CancelarPedidoModal";

const MinhasEncomendas = ({ index }) => {
  const [cardsData, setCardsData] = useState([]);
  const [images, setImages] = useState({}); // Estado para armazenar imagens mapeadas por ID
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPedidoId, setSelectedPedidoId] = useState(null);

  // Função para buscar os dados das encomendas
  const recuperarValorDoCardum = () => {
    api
      .get("/encomendas")
      .then((response) => {
        const { data } = response;
        setCardsData(data);
        data.forEach((item) => getImage(item.id)); // Chama getImage para cada ID
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Função para buscar a imagem pelo ID
  const getImage = (id) => {
    api
      .get(`/cakes/imagem/${id}`, { responseType: "blob" })
      .then((response) => {
        const imageUrl = URL.createObjectURL(response.data); // Cria URL da imagem
        setImages((prevImages) => ({
          ...prevImages,
          [id]: imageUrl, // Associa a imagem ao ID específico
        }));
      })
      .catch((error) => {
        console.error(`Erro ao buscar a imagem do pedido ${id}:`, error);
      });
  };

  useEffect(() => {
    recuperarValorDoCardum();
  }, [index]);

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
                  src={images[data.bolo.id] || ""} // Busca a imagem do estado pelo ID
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
                    Status de Encomenda: {data.andamento}
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

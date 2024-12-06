import { React, useState, useEffect } from 'react';
import styles from "./Detalhes.module.css";
import NavBarCliente from "../../../components/NavBarCliente/NavBarCliente";
import coroa from "../../../utils/Detalhes/coroa.png";
import lixeira from "../../../utils/Detalhes/lixeira.png";
import bolo from "../../../utils/Detalhes/Bolo-Sensacao-01.webp";
import RetiradaModal from "../../Cliente/Detalhes/retiradaModal/RetiradaModal";
import api from "../../../api";

const Detalhes = () => {
  const [morangoDataUm, setMorangoDataUm] = useState([]);
  const [contadores, setContadores] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  // Carregar os dados e inicializar os contadores
  useEffect(() => {
    api.get("/cakes")
      .then((response) => {
        const { data } = response;
        setMorangoDataUm(data);

        // Inicializa os contadores para os itens carregados
        const initialCounters = data.reduce((acc, item) => {
          acc[item.id] = 0;
          return acc;
        }, {});
        setContadores(initialCounters);
      })
      .catch((error) => console.log(error));
  }, []);

  const incrementar = (id) => {
    setContadores((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decrementar = (id) => {
    setContadores((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Controle do modal de cancelamento
  const handleOpenCancelModal = (id) => {
    setSelectedItemId(id); // Define o item a ser cancelado
    setIsCancelModalOpen(true);
  };
  const handleCloseCancelModal = () => {
    setIsCancelModalOpen(false);
    setSelectedItemId(null); // Limpa o item selecionado
  };
  const handleConfirmCancel = () => {
    if (selectedItemId) {
      setMorangoDataUm((prev) => prev.filter((item) => item.id !== selectedItemId));
      console.log(`Pedido com ID ${selectedItemId} cancelado`);
    }
    setIsCancelModalOpen(false);
    setSelectedItemId(null);
  };

  return (
    <>
      <NavBarCliente />

      <div className={styles["container_PaiDetalhe"]}>
        <div className={styles["container_mae"]}>
          <div className={styles["container_filhoDetalhe"]}>
            <img className={styles["coroa"]} src={coroa} alt="Coroa" />
            <h1 className={styles["container_tituloDetalhe"]}>Detalhes do Pedidos</h1>
          </div>
          <ul className={styles["listagem"]}>
            <li>Foto</li>
            <li>Produto</li>
            <li>Quantidade</li>
            <li>Valor</li>
          </ul>
          {morangoDataUm.length > 0 ? (
            morangoDataUm.map((data) => (
              <ul key={data.id} className={styles["listaDois"]}>
                <li><img className={styles["bolos"]} src={bolo} alt="Bolo" /></li>
                <li className={styles["containerPreco"]}>
                  <div className={styles["produtobolo"]}>{data.nome}</div>
                  <li className={styles["diferenciado"]}>
                    <div className={styles["botaoMais"]}>
                      <button
                        onClick={() => incrementar(data.id)}
                        className={styles["botaoAdicionar"]}
                      >+</button>
                      <div className={styles["numeroDiv"]}>
                        <p>{contadores[data.id] || 0}</p>
                      </div>
                      <button
                        onClick={() => decrementar(data.id)}
                        className={styles["botaoAdicionar"]}
                      >-</button>
                    </div>
                  </li>
                </li>
                <li className={styles["containerPreco"]}>R$: {data.preco.toFixed(2)}</li>
                <li className={styles["lixeira"]}>
                  <img
                    className={styles["lixoimg"]}
                    src={lixeira}
                    alt="Cancelar Pedido"
                    onClick={() => handleOpenCancelModal(data.id)} // Abre o modal de cancelamento para o item específico
                  />
                </li>
              </ul>
            ))
          ) : (
            <p>Nenhum pedido disponível.</p>
          )}
          <div className={styles["linha"]}></div>
          <div className={styles["container_itens"]}>
            <p>Adicionar itens...</p>
            <p>SubTotal: R$0,00</p>
          </div>
          <p className={styles["gambiarraTres"]}>Máximo de 2 bolos por encomenda</p>
          <div className={styles["container_lembrete"]}>
            <p className={styles["gambiarraDois"]}>Lembrete: Pagamento na retirada</p>
            <div>
              <button className={styles["container_botaozinho"]} onClick={handleOpenModal}>Encomendar</button>
              <RetiradaModal isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>
          </div>
          <p className={styles["gambiarra"]}>Local da Retirada: Rua Haddock Lobo</p>
        </div>
      </div>

      {/* Modal de Cancelamento */}
      {isCancelModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Confirmar Cancelamento</h2>
            <p>Tem certeza que deseja cancelar este pedido?</p>
            <div className={styles.modalActions}>
              <button className={styles.cancelButton} onClick={handleCloseCancelModal}>
                Não
              </button>
              <button className={styles.confirmButton} onClick={handleConfirmCancel}>
                Sim, Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detalhes;

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
  const [contadores, setContadores] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [preco, setPreco] = useState(0);
  const [precoTela, setPrecoTela] = useState(0);
  const [image, setImage] = useState();

  // Carregar os dados e inicializar os contadores
  const data = JSON.parse(sessionStorage.getItem("props"));
  useEffect(() => {

    console.log("data");
    console.log(data);
    setPreco(data.preco);
    setPrecoTela(data.preco);
    api.get("/cakes/" + data?.id)
      .then((response) => {
        const { data } = response;
        setMorangoDataUm(data);
        console.log(morangoDataUm);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    api
      .get("/cakes/imagem/" + data.id, { responseType: "blob" })  // Alterado para GET e responseType "blob"
      .then((response) => {
        const imageUrl = URL.createObjectURL(response.data);  // Cria uma URL a partir do Blob
        setImage(imageUrl);  // Armazena a URL no estado
        console.log(imageUrl);
      })
      .catch((error) => {
        console.error("Erro ao buscar a imagem:", error);
      });

  }, []);

  const incrementar = () => {
    setContadores((prevContadores) => {
      const novoContador = prevContadores + 1;
      setPrecoTela(preco * novoContador); // Atualiza o preço com o novo contador
      return novoContador;
    });

    console.log("increment", preco, contadores);
  };

  const decrementar = () => {
    setContadores((prevContadores) => {
      if (prevContadores === 1) {
        setPrecoTela(preco); // Se o contador for 1, mantemos o preço original
        return prevContadores; // Não decrementa
      }

      const novoContador = prevContadores - 1;
      setPrecoTela(preco * novoContador); // Atualiza o preço com o novo contador
      return novoContador;
    });

    console.log("decrement", preco, contadores);
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
            <li>Peso</li>
            <li>Valor</li>
          </ul>
          <ul key={morangoDataUm.id} className={styles["listaDois"]}>
            <li>
              <img className={styles["bolos"]} src={image} alt="Bolo" />
            </li>
            <li className={styles["containerPreco"]}>
              <div className={styles["produtobolo"]}>{morangoDataUm.nome}</div>
              <li className={styles["diferenciado"]}>
                <div className={styles["botaoMais"]}>
                  <button
                    onClick={() => incrementar()}
                    className={styles["botaoAdicionar"]}
                  >
                    +
                  </button>
                  <div className={styles["numeroDiv"]}>
                    <p>{contadores}</p>
                  </div>
                  <button
                    onClick={() => decrementar()}
                    className={styles["botaoAdicionar"]}
                  >
                    -
                  </button>
                </div>
              </li>
            </li>
            <li className={styles["containerPreco"]}>R$: {precoTela.toFixed(2)}</li>
            <li className={styles["lixeira"]}>
              <img
                className={styles["lixoimg"]}
                src={lixeira}
                alt="Cancelar Pedido"
                onClick={() => handleOpenCancelModal(morangoDataUm.id)} // Abre o modal de cancelamento para o item específico
              />
            </li>
          </ul>
          <div className={styles["linha"]}></div>
          <div className={styles["container_itens"]}>
            <p>Adicionar itens...</p>
            <p>SubTotal: R$0,00</p>
          </div>
          <p className={styles["gambiarraTres"]}>Máximo de 2 bolos por encomenda</p>
          <div className={styles["container_lembrete"]}>
            <p className={styles["gambiarraDois"]}>Lembrete: Pagamento na retirada</p>
            <div>
              <button className={styles["container_botaozinho"]} onClick={handleOpenModal}>
                Encomendar
              </button>
              <RetiradaModal isOpen={isModalOpen} onClose={handleCloseModal} pesos={contadores} preco={precoTela} adicional={data.adicionais} index={data.id} />
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

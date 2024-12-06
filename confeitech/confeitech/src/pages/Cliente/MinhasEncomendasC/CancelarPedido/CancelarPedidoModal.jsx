import React from "react";
import styles from "./CancelarPedidoModal.module.css";
import api from "../../../../api";

const CancelarPedidoModal = ({ isOpen, onClose, pedidoId }) => {

  const excluirAdicional = () => {
    console.log("ID do pedido enviado para exclusão:", pedidoId);

    // Verifique se o pedidoId foi fornecido
    if (!pedidoId) {
      console.error("Erro: ID do pedido não fornecido.");
      return;
    }

    // Envia a requisição de exclusão para o endpoint correto
    api
      .delete(`/cakes/${pedidoId}`)
      .then(() => {
        console.log("Pedido cancelado com sucesso!");
        onClose(); // Fecha o modal após o sucesso
      })
      .catch((error) => {
        // Verifique se a resposta do servidor contém erro
        if (error.response) {
          console.error("Erro do servidor:", error.response.data);
          console.error("Código de status:", error.response.status);
          // Exemplo de resposta com erro 400 ou 500
          if (error.response.status === 400) {
            alert("Erro: Pedido não encontrado ou dados inválidos.");
          } else if (error.response.status === 500) {
            alert("Erro no servidor. Tente novamente mais tarde.");
          }
        } else if (error.request) {
          // Nenhuma resposta do servidor
          console.error("Nenhuma resposta recebida do servidor:", error.request);
          alert("Erro: Não foi possível se comunicar com o servidor.");
        } else {
          // Erro na configuração da requisição
          console.error("Erro ao configurar a requisição:", error.message);
          alert("Erro desconhecido. Tente novamente.");
        }
      });
  };

  // Se o modal não estiver aberto, retorna null
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Confirmar Cancelamento</h2>
        <p>Tem certeza de que deseja cancelar o pedido?</p>
        <div className={styles.buttons}>
          <button
            className={styles.confirmButton}
            onClick={excluirAdicional}
          >
            Confirmar
          </button>
          <button
            className={styles.cancelButton}
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelarPedidoModal;

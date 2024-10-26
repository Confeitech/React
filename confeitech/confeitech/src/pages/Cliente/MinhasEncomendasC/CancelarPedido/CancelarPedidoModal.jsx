// src/components/CancelarPedidoModal.jsx
import React from "react";
import styles from "./CancelarPedidoModal.module.css";

const CancelarPedidoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Confirmar Cancelamento</h2>
        <p>Tem certeza de que deseja cancelar o pedido?</p>
        <div className={styles.buttons}>
          <button className={styles.confirmButton} onClick={onClose}>
            Confirmar
          </button>
          <button className={styles.cancelButton} onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelarPedidoModal;

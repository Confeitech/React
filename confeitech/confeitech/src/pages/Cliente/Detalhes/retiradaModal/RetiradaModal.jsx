// src/components/RetiradaModal.jsx
import React from "react";
import styles from "./RetiradaModal.module.css";

const RetiradaModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2 className={styles.title}>Retirada</h2>
                <p className={styles.subtitle}>
                    Escolha um dia e horário para realizar a retirada:
                </p>

                <div className={styles.options}>
                    <input className={styles["horario"]} type="text" placeholder="13h" />
                    <input className={styles["horario"]} type="text" placeholder="30m" />
                    <input className={styles["horario"]} type="text" placeholder="59s" />
                </div>

                <div className={styles.datePicker}>
                    <button className={styles.dateButton}>Escolher Data</button>
                </div>

                <button className={styles.encomendarButton} onClick={onClose}>
                    Encomendar
                </button>
            </div>
        </div>
    );
};

export default RetiradaModal;

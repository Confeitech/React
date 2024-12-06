// src/components/RetiradaModal.jsx
import { React, useState, useEffect } from 'react';
import styles from "./RetiradaModal.module.css";
// import api from "../../../api";

const RetiradaModal = ({ isOpen, onClose }) => {

    // // const enviar = () =>{
    // //     api
    // //     .post("/encomendas", {
    // //         // preco: ,
    // //         // "observacoes": "string",
    // //         // "bolo": 0,
    // //         // "adicionais": "string",
    // //         // "andamento": "AGUARDANDO",
    // //         // "dataCriacao": "2024-12-05",
    // //         // "dataRetirada": "2024-12-05",
    // //         // "user": 0
    // //     })
    // //     .then(() => {
    // //       console.log("Adicionado");
    // //       getData();
    // //       closeModalAdd();
    // //     })
    // //     .catch((error) => {
    // //       console.log(error);
    // //     });
    // }
    

    const [dia,setdia] = useState()
    const [mes,setmes] =useState()



    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2 className={styles.title}>Retirada</h2>
                <p className={styles.subtitle}>
                    Escolha um dia para realizar a retirada:
                </p>

                <div className={styles.options}>
                    <input className={styles["horario"]} type="text" placeholder="Dia" onChange={(e) => setdia(e.target.value)}/>
                    <input className={styles["horario"]} type="text" placeholder="Mês"  onChange={(e) => setmes(e.target.value)}/>
                
                </div>


                <button className={styles.encomendarButton} onClick={onClose}>
                    Encomendar
                </button>
            </div>
        </div>
    );
};

export default RetiradaModal;

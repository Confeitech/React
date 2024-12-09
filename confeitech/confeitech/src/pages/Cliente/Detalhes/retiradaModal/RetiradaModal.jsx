// src/components/RetiradaModal.jsx
import { React, useState, useEffect } from 'react';
import styles from "./RetiradaModal.module.css";
import api from '../../../../api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RetiradaModal = ({ isOpen, onClose, pesos, preco, adicional, index }) => {
    const navigate = useNavigate();
    const [dia, setDia] = useState()
    const [mes, setMes] = useState()
    const [ano, setAno] = useState()

    const enviar = () => {
        const info = JSON.parse(sessionStorage.getItem("props"));

        // Formatar a data no formato "YYYY-MM-DD"
        const dataFormatada = `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;

        api
            .post("/encomendas", {
                preco: preco,
                observacoes: info.observacoes,
                peso: pesos,
                bolo: index,
                adicionais: "STRING",
                dataRetirada: dataFormatada,
                user: 1
            })
            .then(() => {
                console.log("Adicionado");
                onClose();
                toast.success("Encomenda realizada com sucesso!");
                sessionStorage.removeItem("props");
                navigate("/minhasEncomendas");
            })
            .catch((error) => {
                console.log(dataFormatada)
                console.log(
                    preco,
                  info.observacoes,
                     pesos,
                    index,
                   
                     dataFormatada,
                                    )
                console.log(error);
                toast.error("Erro ao realizar encomenda!");
            });
    }


    useEffect(() => {
        console.log("Preco: ", preco);
        console.log("Adicional: ", adicional);
        console.log("Index: ", index);
        console.log("Peso: ", pesos);
    }, [isOpen]);




    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2 className={styles.title}>Retirada</h2>
                <p className={styles.subtitle}>
                    Escolha um dia para realizar a retirada:
                </p>

                <div className={styles.options}>
                    <input className={styles["horario"]} type="text" placeholder="Dia" onChange={(e) => setDia(e.target.value)} />
                    <select
                        className={styles["horario"]}
                        onChange={(e) => setMes(e.target.value)}
                        value={mes}
                    >
                        {[...Array(12)].map((_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </select>
                    <input className={styles["horario"]} type="text" placeholder="Ano" onChange={(e) => setAno(e.target.value)} />
                </div>


                <button className={styles.encomendarButton} onClick={enviar}>
                    Encomendar
                </button>
            </div>
        </div>
    );
};

export default RetiradaModal;

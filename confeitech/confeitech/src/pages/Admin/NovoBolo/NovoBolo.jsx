import React, { useState } from "react";
import styles from "./NovoBolo.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import check from "../../../utils/assets/verifica.png";
import cancel from "../../../utils/assets/cancelar.png";
import imagemLink from "../../../utils/assets/link.png";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../../../api";

const NovoBolo = () => {
    const [number, setNumber] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const [nomeBolo, setNomeBolo] = useState("Bolo de cenoura");
    const [descricaoBolo, setDescricaoBolo] = useState("Contem glutem e lactose");
    const [precoBolo, setPrecoBolo] = useState(20);
    const navigate = useNavigate();
    let idBoloImage;
    const Voltar = () => {
        navigate("/cardapio");
    }

    const criarBolo = async () => {
        console.log(selectedFile);

        if (
            nomeBolo === "" ||
            descricaoBolo === "" ||
            precoBolo === 0 ||
            !selectedFile
        ) {
            toast.error("Preencha todos os campos!");
            return;
        }

        try {
            // 1. Criar o bolo e obter o ID
            const boloResponse = await api.post("/cakes", {
                nome: nomeBolo,
                preco: precoBolo,
                descricao: descricaoBolo,
                adicionais: [],
            });

            const idBoloImage = boloResponse.data.id;
            console.log("Bolo criado com ID:", idBoloImage);

            // 2. Enviar a imagem para o backend
            const formData = new FormData();
            formData.append("novaFoto", selectedFile);

            const imagemResponse = await fetch(
                `http://localhost:8080/cakes/imagem/${idBoloImage}`,
                {
                    method: "PATCH",
                    body: formData,
                }
            );

            if (imagemResponse.ok) {
                toast.success("Imagem enviada com sucesso!");
                console.log("Imagem enviada com sucesso!");
                navigate("/cardapio"); // Redireciona após sucesso
            } else {
                const errorText = await imagemResponse.text();
                toast.error(`Erro ao enviar imagem: ${errorText || "Erro desconhecido"}`);
                console.error(`Erro ao enviar imagem: ${errorText || "Erro desconhecido"}`);
            }
        } catch (error) {
            console.error("Erro ao criar o bolo ou enviar a imagem:", error);
            toast.error("Erro ao criar o bolo ou enviar a imagem!");
        }
    };


    const enviarFoto = async (e) => {
        // e.preventDefault();
        // const formData = new FormData();

        // formData.append("novaFoto", selectedFile); // Certifique-se de que o nome do campo é 'novaFoto' conforme a definição do backend

        // try {
        //     const response = await fetch("http://localhost:8080/cakes/imagem/2", {
        //         method: "PATCH",
        //         body: formData,
        //     });

        //     if (response.ok) {
        //         toast.success("Imagem enviada com sucesso!");
        //         console.log("Imagem enviada com sucesso!");

        //     } else {
        //         const errorText = await response.text();
        //         toast.error(`Erro ao enviar imagem`);
        //         console.error(`Erro ao enviar imagem: ${errorText || 'Erro desconhecido'}`);
        //     }
        // } catch (error) {
        //     toast.error("Erro ao enviar imagem.");
        //     console.error("Erro ao enviar imagem", error);
        // }
    };

    return (
        <div className={styles["body"]}>
            <NavBarAdmin />
            <div className={styles["newCake"]}>
                <div className={styles["boxNew"]}>
                    <div className={styles["contentCake"]}>
                        <div className={styles["titleCake"]}>
                            <textarea className={styles["text"]} id="nomeBolo" placeholder="Nome Bolo" value={nomeBolo} onChange={(e) => setNomeBolo(e.target.value)}></textarea>
                            <label className={styles["link"]} htmlFor="nomeBolo">Adicionar Nome +</label>
                        </div>
                        <div className={styles["midCake"]}>
                            <textarea id="descricaoBolo" placeholder="Descrição Bolo" type="text" className={styles["inputCake"]} value={descricaoBolo} onChange={(e) => setDescricaoBolo(e.target.value)} />
                            <label htmlFor="descricaoBolo" className={styles["link"]}>Adicionar Descrição +</label>
                        </div>
                        <div className={styles["titleCake"]}>
                            <div className={styles["precinho"]}>
                                R$:
                            </div>
                            <textarea id="precoBolo" className={styles["text"]} placeholder="Preço Padrão: 1kg" value={precoBolo} onChange={(e) => setPrecoBolo(e.target.value)}></textarea>
                            <label htmlFor="precoBolo" className={styles["link"]}>Adicionar Preço +</label>
                        </div>
                        <div className={styles["buttonsSpace"]}>
                            <div className={styles["correct"]}>
                                <div type="file" className={styles["addImage"]}>
                                    Adicionar imagem
                                </div>
                                <input type="file" accept="image/jpeg" onChange={(e) => setSelectedFile(e.target.files[0])} />
                            </div>
                        </div>
                        <div className={styles["check"]}>
                            <div className={styles["fix"]}>
                                <div className={styles["colum"]} onClick={criarBolo}>
                                    <h5>Concluir</h5>
                                    <img src={check} alt="Check" className={styles["imagens"]} />
                                </div>
                                <div className={styles["colum"]} onClick={Voltar}>
                                    <h5>Excluir</h5>
                                    <img src={cancel} alt="Cancel" className={styles["imagens"]} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NovoBolo;
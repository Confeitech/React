import React, { useState } from "react";
import styles from "./NovoBolo.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import check from "../../../utils/assets/verifica.png";
import cancel from "../../../utils/assets/cancelar.png";
import imagemLink from "../../../utils/assets/link.png";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const NovoBolo = () => {
    const [number, setNumber] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const [nomeBolo, setNomeBolo] = useState("");
    const [descricaoBolo, setDescricaoBolo] = useState("");
    const [precoBolo, setPrecoBolo] = useState(0);
    const navigate = useNavigate();

    const Voltar = () => {
        navigate("/cardapio");
    }

    const criarBolo = () => {

        if(nomeBolo === "" || descricaoBolo === "" || precoBolo === 0){
            toast.error("Preencha todos os campos!");
        }else{

        }
    }

    const enviarFoto = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", selectedFile);
    
        try {
            const response = await fetch("http://localhost:8080/cakes/imagem/2", {
                method: "PATCH",
                body: formData,
            });
    
            if (response.ok) {
                // Sucesso
                toast.success("Imagem enviada com sucesso!");
                console.log("Imagem enviada com sucesso!");
            } else {
                // Caso a resposta não seja OK, mostra erro
                const errorText = await response.text();
                toast.error(`Erro ao enviar imagem: ${errorText || 'Erro desconhecido'}`);
                console.error(`Erro ao enviar imagem: ${errorText || 'Erro desconhecido'}`);
            }
        } catch (error) {
            // Erro de rede ou falha no fetch
            toast.error("Erro ao enviar imagem.");
            console.error("Erro ao enviar imagem", error);
        }
    };
    

    return (
        <div className={styles["body"]}>
            <NavBarAdmin />
            <div className={styles["newCake"]}>
                <div className={styles["boxNew"]}>
                    <div className={styles["contentCake"]}>
                        <div className={styles["titleCake"]}>
                            <textarea className={styles["text"]} id="nomeBolo" placeholder="Nome Bolo" onChange={(e) => setNomeBolo(e.target.value)}></textarea>
                            <label className={styles["link"]} htmlFor="nomeBolo">Adicionar Nome +</label>
                        </div>
                        <div className={styles["midCake"]}>
                            <textarea id="descricaoBolo" placeholder="Descrição Bolo" type="text" className={styles["inputCake"]} onChange={(e) => setDescricaoBolo(e.target.value)} />
                            <label htmlFor="descricaoBolo" className={styles["link"]}>Adicionar Descrição +</label>
                        </div>
                        <div className={styles["titleCake"]}>
                            <div className={styles["precinho"]}>
                                R$:
                            </div>
                            <textarea id="precoBolo" className={styles["text"]} placeholder="Preço Padrão: 1kg" onChange={(e) => setPrecoBolo(e.target.value)}></textarea>
                            <label htmlFor="precoBolo" className={styles["link"]}>Adicionar Preço +</label>
                        </div>
                        <div className={styles["buttonsSpace"]}>
                            <div className={styles["correct"]}>
                                <div type="file" className={styles["addImage"]}>
                                    Adicionar imagem 
                                </div>
                                <form action="" onSubmit={enviarFoto}>
                                    <input type="file" accept="image/jpeg" />
                                    <button type="submit" > Enviar    </button>
                                </form>
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
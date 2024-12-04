import React, { useState } from "react";
import styles from "./NovoBolo.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import check from "../../../utils/assets/verifica.png";
import cancel from "../../../utils/assets/cancelar.png";
import imagemLink from "../../../utils/assets/link.png";
import { ToastContainer, toast } from "react-toastify";

const NovoBolo = () => {
    const [number, setNumber] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const oioi = () => {
        toast.error("Bolo excluído com sucesso!");
    }

    const enviarFoto = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await fetch("http://localhost:8080/cakes/imagem", {
                method: "PACTH",
                body: formData,
            });
            if (response.ok) {
                toast.success("Imagem enviada com sucesso!");
                console.log("Imagem enviada com sucesso!");
            } else {
                toast.error("Erro ao enviar imagem");
                console.log("Erro ao enviar imagem");
            }

        } catch (error) {
            console.log("Erro", error);
        }
    }

        return (
            <div className={styles["body"]}>
                <NavBarAdmin />
                <div className={styles["newCake"]}>
                    <div className={styles["boxNew"]}>
                        <div className={styles["contentCake"]}>
                            <div className={styles["titleCake"]}>
                                <textarea className={styles["text"]} id="nomeBolo" placeholder="Nome Bolo"></textarea>
                                <label className={styles["link"]} htmlFor="nomeBolo"> Modificar Nome +</label>
                            </div>
                            <div className={styles["midCake"]}>
                                <textarea id="descricaoBolo" placeholder="Descrição Bolo" type="text" className={styles["inputCake"]} />
                                <label htmlFor="descricaoBolo" className={styles["link"]}>Modificar Descrição +</label>
                            </div>
                            <div className={styles["titleCake"]}>
                                <div className={styles["precinho"]}>
                                    R$:
                                </div>
                                <textarea id="precoBolo" className={styles["text"]} placeholder="Preço Bolo"></textarea>
                                <label htmlFor="precoBolo" className={styles["link"]}>Modificar Preço +</label>
                            </div>
                            <div className={styles["buttonsSpace"]}>
                                <div className={styles["correct"]}>
                                    <div type="file" className={styles["addImage"]}>Adicionar imagem <img src={imagemLink} alt="" style={{ width: "10%", height: "40%", margin: "10px" }} /></div>
                                    <form action="" onSubmit={enviarFoto}>
                                        <input type="file" accept="image/jpeg" />
                                        <button type="submit" > Enviar    </button>
                                    </form>
                                </div>
                            </div>
                            <div className={styles["check"]}>
                                <div className={styles["fix"]}>
                                    <div className={styles["colum"]}>
                                        <h5>Concluir</h5>
                                        <img src={check} alt="Check" className={styles["imagens"]} />
                                    </div>
                                    <div className={styles["colum"]} onClick={oioi}>
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
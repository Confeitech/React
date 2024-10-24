import React, { useState } from "react";
import styles from "./NovoBolo.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import check from "../../../utils/assets/verifica.png";
import cancel from "../../../utils/assets/cancelar.png";
import imagemLink from "../../../utils/assets/link.png";

const NovoBolo = () => {
    const [number, setNumber] = useState(0);
    return (
        <div className={styles["body"]}>
            <NavBarAdmin />
            <div className={styles["newCake"]}>
                <div className={styles["boxNew"]}>
                    <div className={styles["contentCake"]}>
                        <div className={styles["titleCake"]}>
                            <h2>Titulo</h2>
                            <h3 className={styles["link"]}>Modificar Nome +</h3>
                        </div>
                        <div className={styles["midCake"]}>
                            <textarea placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique harum a pariatur quo. Blanditiis facilis quod maiores a architecto laudantium eligendi." type="text" className={styles["inputCake"]} />
                            <h3 className={styles["link"]}>Modificar Descrição +</h3>
                        </div>
                        <div className={styles["titleCake"]}>
                            <h2 className={styles["priceCake"]}>R$: 00,00</h2>
                            <h3 className={styles["link"]}>Modificar Preço +</h3>
                        </div>
                        <div className={styles["buttonsCake"]}>
                            <button className={styles["buttonPurple"]}>1,0kg</button>
                            <button className={styles["buttonWhite"]}>+</button>
                        </div>
                        <div className={styles["tabelaCake"]}>
                            <div className={styles["card"]}>
                                <div className={styles["detailsCard"]}>
                                    <h3>morangos</h3>
                                    <h3 style={{ color: "#1B5519" }}>+ R$0,00</h3>
                                </div>
                                <div className={styles["buttonsCard"]}>
                                    <button>-</button>
                                    <div className={styles["number"]}>
                                        <h3>
                                            {number}
                                        </h3>
                                    </div>
                                    <button>+</button>
                                </div>
                                <div className={styles["meio"]}>
                                    <h3 className={styles["link"]}>Modificar +</h3>
                                </div>
                            </div>
                            <div className={styles["card"]}>
                                <div className={styles["detailsCard"]}>
                                    <h3>morangos</h3>
                                    <h3 style={{ color: "#1B5519" }}>+ R$0,00</h3>
                                </div>
                                <div className={styles["buttonsCard"]}>
                                    <button>-</button>
                                    <div className={styles["number"]}>
                                        <h3>
                                            {number}
                                        </h3>
                                    </div>
                                    <button>+</button>
                                </div>
                                <div className={styles["meio"]}>
                                    <h3 className={styles["link"]}>Modificar +</h3>
                                </div>
                            </div>
                            <div className={styles["card"]}>
                                <div className={styles["detailsCard"]}>
                                    <h3>morangos</h3>
                                    <h3 style={{ color: "#1B5519" }}>+ R$0,00</h3>
                                </div>
                                <div className={styles["buttonsCard"]}>
                                    <button>-</button>
                                    <div className={styles["number"]}>
                                        <h3>
                                            {number}
                                        </h3>
                                    </div>
                                    <button>+</button>
                                </div>
                                <div className={styles["meio"]}>
                                    <h3 className={styles["link"]}>Modificar +</h3>
                                </div>
                            </div>
                            <div className={styles["card"]}>
                                <div className={styles["detailsCard"]}>
                                    <h3>morangos</h3>
                                    <h3 style={{ color: "#1B5519" }}>+ R$0,00</h3>
                                </div>
                                <div className={styles["buttonsCard"]}>
                                    <button>-</button>
                                    <div className={styles["number"]}>
                                        <h3>
                                            {number}
                                        </h3>
                                    </div>
                                    <button>+</button>
                                </div>
                                <div className={styles["meio"]}>
                                    <h3 className={styles["link"]}>Modificar +</h3>
                                </div>
                            </div>
                            <div className={styles["card"]}>
                                <div className={styles["detailsCard"]}>
                                    <h3>morangos</h3>
                                    <h3 style={{ color: "#1B5519" }}>+ R$0,00</h3>
                                </div>
                                <div className={styles["buttonsCard"]}>
                                    <button>-</button>
                                    <div className={styles["number"]}>
                                        <h3>
                                            {number}
                                        </h3>
                                    </div>
                                    <button>+</button>
                                </div>
                                <div className={styles["meio"]}>
                                    <h3 className={styles["link"]}>Modificar +</h3>
                                </div>
                            </div>
                        </div>
                        <div className={styles["buttonsSpace"]}>
                            <button className={styles["buttonAdd"]}>Adicionar+</button>
                            <div className={styles["correct"]}>
                                <button className={styles["addImage"]}>Adicionar imagem <img src={imagemLink} alt="" style={{width: "10%", height:"40%", margin: "10px"}}/></button>
                            </div>
                        </div>
                        <div className={styles["check"]}>
                            <div className={styles["fix"]}>
                                <div className={styles["colum"]}>
                                    <h5>Concluir</h5>
                                    <img src={check} alt="Check" className={styles["imagens"]} />
                                </div>
                                <div className={styles["colum"]}>
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
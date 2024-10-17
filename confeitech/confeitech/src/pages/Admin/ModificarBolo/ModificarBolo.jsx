import { React, useEffect } from "react";
import styles from "./ModificarBolo.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import check from "../../../utils/assets/verifica.png";
import cancel from "../../../utils/assets/cancelar.png";

const ModificarBolo = () => {
    const number = 0;
    return (
        <div className={styles["corpo"]}>
            <NavBarAdmin />
            <div className={styles["editCake"]}>
                <div className={styles["editLeft"]}>
                    <div className={styles["contentEditLeft"]}>
                        <h3 className={styles["link"]}>Modificar imagem +</h3>
                        <div className={styles["editImage"]}></div>
                    </div>
                </div>
                <div className={styles["editRight"]}>
                    <div className={styles["boxEditRight"]}>
                        <div className={styles["contentEditRight"]}>
                            <div className={styles["titleEdit"]}>
                                <h2>Titulo</h2>
                                <h3 className={styles["link"]}>Modificar Nome +</h3>
                            </div>
                            <div className={styles["midEdit"]}>
                                <textarea placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique harum a pariatur quo." type="text" className={styles["inputEdit"]} />
                                <h3 className={styles["link"]}>Modificar Descrição +</h3>
                            </div>
                            <div className={styles["titleEdit"]}>
                                <h2 className={styles["priceEdit"]}>R$: 00,00</h2>
                                <h3 className={styles["link"]}>Modificar Preço +</h3>
                            </div>
                            <div className={styles["buttonsEdit"]}>
                                <button className={styles["buttonPurple"]}>1,0kg</button>
                                <button className={styles["buttonPurple"]}>1,0kg</button>
                                <button className={styles["buttonPurple"]}>1,0kg</button>
                                <button className={styles["buttonWhite"]}>+</button>
                            </div>
                            <div className={styles["tabelaEdit"]}>
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
        </div>
    );
};
export default ModificarBolo;
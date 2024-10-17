import React from "react";
import styles from "./EncomendaCliente.module.css"
import NavBarCliente from "../../components/NavBarCliente/NavBarCliente";

const encomendaCliente = () => {
    return (
        <>
            <NavBarCliente />
            <div className={styles["container_pai"]}>
                <div className={styles["container_foto"]}>
                    {/* imagem vai ser aqui */}
                </div>

                <div className={styles["container_elementos"]}>
                    <h1 className={styles["container_titulo"]}>Bolo sensação</h1>
                    <p className={styles["container_paragrafo"]}>aorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                
                <p className={styles["dinheiro"]}>R$:00.00</p>
                
                    <div className={styles["container_encomenda"]}>
                        <p>Tamanho:1,0Kg</p>
                        <button className={styles["container_botao"]}>Encomendar</button>
                    </div>
                    <div className={styles["container_lista"]}>
                        <button className={styles["container_kilos"]}>1.5Kg</button>
                        <button className={styles["container_kilos"]}>2.0Kg</button>
                        <button className={styles["container_kilos"]}>1.0Kg</button>
                        <button className={styles["container_kilos"]}>2.5Kg</button>
                    </div>


                    <h3 className={styles["naosei"]}>Adicionais</h3>
                    <div className={styles["container_paiAdicionar"]}>
                        <div className={styles["container_filhoAdicionar"]}>
                            <div className={styles["container_adicional"]}>
                                <p className={styles["Morango"]} >Morango: R$:00,00</p>
                            </div>

                            <div className={styles["container_botaoPaiAdicionarBanana"]}>
                                <button className={styles["botaoAdicionar"]}>+</button>
                                <div className={styles["num"]}>
                                <p className={styles["paragrafoUm"]}>0</p>
                                </div>
                                <button className={styles["botaoAdicionar"]}>-</button>
                            </div>
                        </div>
                        <div className={styles["container_filhoAdicionar"]}>
                            <div className={styles["container_adicional"]}>
                                <p className={styles["Morango"]} >Morango: R$00,00</p>
                            
                            </div>

                            <div className={styles["container_botaoPaiAdicionarBanana"]}>
                                <button className={styles["botaoAdicionar"]}>+</button>
                                <div className={styles["num"]}>
                                <p className={styles["paragrafoUm"]}>0</p>
                                </div>
                                <button className={styles["botaoAdicionar"]}>-</button>
                            </div>
                        </div>

                        <div className={styles["container_filhoAdicionar"]}>
                            <div className={styles["container_adicional"]}>
                                <p className={styles["Morango"]} >Morango: R$00,00</p>
                                
                            </div>

                            <div className={styles["container_botaoPaiAdicionarBanana"]}>
                                <button className={styles["botaoAdicionar"]}>+</button>
                                <div className={styles["container_zero"]}>
                                <div className={styles["num"]}>
                                <p className={styles["paragrafoUm"]}>0</p>
                                </div>
                                </div>
                                <button className={styles["botaoAdicionar"]}>-</button>
                            </div>
                        </div>

                        

                    
                    </div>
                    <p>Alguma observação?</p>
                    <div className={styles["container_ob"]}>
                    
                    <div className="observacao">
                    <input className={styles["ob"]} type="text" placeholder="Ex: tenho intolerância a lactose, gluten etc. "></input>
                    </div>
                    

                    </div>

                <div className={styles["container_retirada"]}>
                    <p className={styles["container_gamb"]}>Lembrete: Pagamento na retirada</p>
                <button className={styles["container_botaodois"]}>Encomendar</button>
                </div>


                </div>
            </div>
        </>
    )
}

export default encomendaCliente;
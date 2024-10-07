import React from "react";
import styles from "./Detalhes.module.css"
import NavBarCliente from "../../../components/NavBarCliente/NavBarCliente";

const Detalhes = () => {
    return (
        <>
            <NavBarCliente />

            <div className={styles["container_PaiDetalhe"]}>
                <div className={styles["container_mae"]}>
                    <div className={styles["container_filhoDetalhe"]}>
                        <h1 className={styles["container_tituloDetalhe"]}>Detalhes do Pedidos</h1>
                    </div>
                    <ul className={styles["listagem"]}>
                        <li>Foto</li>
                        <li>Produto</li>
                        <li>Quantidade</li>
                        <li>Valor</li>
                    </ul>
                    <ul className={styles["listaDois"]}>
                        <li> FOTO  </li>
                        <li>Bolo Sensação</li>
                        <li className={styles["diferenciado"]}> <button>+</button>
                                <p>0</p>
                                <button >-</button></li>
                        <li>R$:0,00</li>
                        <li className={styles["lixeira"]}>LIXEIRA</li>
                    </ul>
                    <div className={styles["linha"]}></div>
                    <ul className={styles["listaDois"]}>
                        <li> FOTO  </li>
                        <li>Bolo Sensação</li>
                        <li className={styles["diferenciado"]}> <button>+</button>
                                <p>0</p>
                                <button >-</button></li>
                        <li>R$:0,00</li>
                        <li className={styles["lixeira"]}>LIXEIRA</li>
                    </ul>
                    <div className={styles["linha"]}></div>
                <div className={styles["container_itens"]}>
                <p>Adicionar itens...</p>
                <p>SubTotal: R$0,00</p>
                
                </div>
                
                
                <div className={styles["container_lembrete"]}>
                    <p className={styles["gambiarraDois"]}>Lembrete:Pagamento na retirada</p>
                    
                    <div>
                <button className={styles["container_botaozinho"]}>Encomendar</button>
                </div>
                </div>
                <p className={styles["gambiarra"]}>Local da Retirada:Rua haddock lobo</p>
               
                </div>
            </div>
        </>
    )
}
export default Detalhes;
import React, { useState } from "react";
import styles from "./MinhasEncomendas.module.css"
import NavBarCliente from "../../../components/NavBarCliente/NavBarCliente";
import coroa from "../../../utils/Detalhes/coroa.png";
import bolo from "../../../utils/Detalhes/Bolo-Sensacao-01.webp"
import CancelarPedidoModal from "../../Cliente/MinhasEncomendasC/CancelarPedido/CancelarPedidoModal";
import boloFloresta from "../../../utils/Detalhes/floresta-negra-cod-374.jpg"
import boloMorango from "../../../utils/Detalhes/bolo-de-morango-aniversario.jpg"


const MinhasEncomendas = () => {

    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    return (
        <>

            <NavBarCliente />
            <div className={styles["cardapio"]}>
                <div className={styles["content"]}>
                    <div className={styles["text"]}>

                        <span className={styles["span_cardapio2"]}>
                            <img className={styles["coroa"]} src={coroa} />
                            <h1 className={styles["h1_cardapio"]}>Minhas Encomendas</h1>
                        </span>
                    </div>

                    <div className={styles["encomendasPai"]}>
                        <img className={styles["bolofoto"]} src={bolo} />
                        <div className={styles["information"]}>
                            <p className={styles["bolin"]}>Bolo sensação</p>
                            <p className={styles["pretin"]}>Data de Encomenda:</p>
                            <p className={styles["pretin"]}>Data de Retirada:</p>
                            <p className={styles["pretin"]}>Status de Encomenda:</p>
                            <p className={styles["pretin"]}>Local de Retirada:</p>
                        </div>
                        <div className={styles["name"]}>
                            <p className={styles["total"]}> TOTAL:R$:00.00</p>
                            <button className={styles["cancelarPedido"]} onClick={handleOpenModal}>Cancelar Pedido</button>
                            <CancelarPedidoModal isOpen={isModalOpen} onClose={handleCloseModal} />
                        </div>
                    </div>
                    <div className={styles["encomendasPai"]}>
                        <img className={styles["bolofoto"]} src={boloMorango} />
                        <div className={styles["information"]}>
                            <p className={styles["bolin"]}>Bolo de Morango</p>
                            <p className={styles["pretin"]}>Data de Encomenda:</p>
                            <p className={styles["pretin"]}>Data de Retirada:</p>
                            <p className={styles["pretin"]}>Status de Encomenda:</p>
                            <p className={styles["pretin"]}>Local de Retirada:</p>
                        </div>
                        <div className={styles["name"]}>
                            <p className={styles["total"]}> TOTAL:R$:00.00</p>
                            <button className={styles["cancelarPedido"]} onClick={handleOpenModal}>Cancelar Pedido</button>
                            <CancelarPedidoModal isOpen={isModalOpen} onClose={handleCloseModal} />
                        </div>
                    </div>
                    <div className={styles["encomendasPai"]}>
                        <img className={styles["bolofoto"]} src={boloFloresta} />
                        <div className={styles["information"]}>
                            <p className={styles["bolin"]}>Bolo Floresta</p>
                            <p className={styles["pretin"]}>Data de Encomenda:</p>
                            <p className={styles["pretin"]}>Data de Retirada:</p>
                            <p className={styles["pretin"]}>Status de Encomenda:</p>
                            <p className={styles["pretin"]}>Local de Retirada:</p>
                        </div>
                        <div className={styles["name"]}>
                            <p className={styles["total"]}> TOTAL:R$:00.00</p>
                            <button className={styles["cancelarPedido"]} onClick={handleOpenModal}>Cancelar Pedido</button>
                            <CancelarPedidoModal isOpen={isModalOpen} onClose={handleCloseModal} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}
export default MinhasEncomendas;
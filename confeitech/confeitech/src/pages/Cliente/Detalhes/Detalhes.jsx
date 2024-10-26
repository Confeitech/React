import React, { useState } from 'react';
import styles from "./Detalhes.module.css"
import NavBarCliente from "../../../components/NavBarCliente/NavBarCliente";
import coroa from "../../../utils/Detalhes/coroa.png";
import lixeira from "../../../utils/Detalhes/lixeira.png"
import bolo from "../../../utils/Detalhes/Bolo-Sensacao-01.webp"
import RetiradaModal from "../../Cliente/Detalhes/retiradaModal/RetiradaModal";



const Detalhes = () => {

//modal
const [isModalOpen, setIsModalOpen] = useState(false);

const handleOpenModal = () => {
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
};




// Contador 1
const [count, setCount] = useState(0);
const aumentar = () => {
  setCount(count + 1);
};
const diminuir = () => {
  setCount(count - 1);
};

// Contador 2
const [countDois, setCountDois] = useState(0);
const aumentarDois = () => {
  setCountDois(countDois + 1); 
};
const diminuirDois = () => {
  setCountDois(countDois - 1); 
};

    return (
        <>
            <NavBarCliente />

            <div className={styles["container_PaiDetalhe"]}>
                <div className={styles["container_mae"]}>
                    <div className={styles["container_filhoDetalhe"]}>
                        <img className={styles["coroa"]} src={coroa}/>
                        <h1 className={styles["container_tituloDetalhe"]}>Detalhes do Pedidos</h1>
                    </div>
                    <ul className={styles["listagem"]}>
                        <li>Foto</li>
                        <li>Produto</li>
                        <li>Quantidade</li>
                        <li>Valor</li>
                    </ul>
                    <ul className={styles["listaDois"]}>
                        <li> <img  className={styles["bolos"]}  src={bolo} />  </li>
                        <li className={styles["containerPreco"]}>Bolo Sensação</li>
                        
                        <li className={styles["diferenciado"]}> 
                            <div className={styles["botaoMais"]}>
                            <button  onClick={aumentar} className={styles["botaoAdicionar"]}>+</button>
                            <div className={styles["numeroDiv"]}>
                                <p>{count}</p>
                                </div>
                                <button onClick={diminuir} className={styles["botaoAdicionar"]}>-</button>
                                </div>
                                </li>
                                
                               

                        <li className={styles["containerPreco"]}>R$:0,00</li>
                        <li className={styles["lixeira"]}><img className ={styles["lixoimg"]} src={lixeira}/></li>
                    </ul>
                    <div className={styles["linha"]}></div>
                    <ul className={styles["listaDois"]}>
                        <li><img  className={styles["bolos"]}  src={bolo} />    </li>
                        <li className={styles["containerPreco"]}>Bolo Sensação</li>
                        
                        <li className={styles["diferenciado"]}> 
                            <div className={styles["botaoMais"]}>
                            <button onClick={aumentarDois} className={styles["botaoAdicionar"]}>+</button>
                            <div className={styles["numeroDiv"]}>
                                <p>{countDois}</p>
                                </div>
                                <button onClick={diminuirDois} className={styles["botaoAdicionar"]}>-</button>
                                </div>
                                </li>
                                
                               

                        <li className={styles["containerPreco"]}>R$:0,00</li>
                        <li className={styles["lixeira"]}><img  className ={styles["lixoimg"]}src={lixeira}/></li>
                    </ul>
                    <div className={styles["linha"]}></div>
                <div className={styles["container_itens"]}>
                <p>Adicionar itens...</p>
                <p>SubTotal: R$0,00</p>
                </div>
                
                <div className={styles["container_lembrete"]}>
                    <p className={styles["gambiarraDois"]}>Lembrete:Pagamento na retirada</p>
                    
                    <div>
                <button  className={styles["container_botaozinho"]} onClick={handleOpenModal}>Encomendar</button>
                <RetiradaModal isOpen={isModalOpen} onClose={handleCloseModal} />
                </div>
                </div>
                <p className={styles["gambiarra"]}>Local da Retirada:Rua haddock lobo</p>
               
                </div>
            </div>
        </>
    )
}
export default Detalhes;
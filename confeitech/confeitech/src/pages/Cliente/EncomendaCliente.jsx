
import styles from "./EncomendaCliente.module.css"
import NavBarCliente from "../../components/NavBarCliente/NavBarCliente";
import React, { useState } from 'react';
import bolo from "../../utils/Detalhes/Bolo-Sensacao-01.webp"

const EncomendaCliente = () => {

    
    
  
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
      
        // Contador 3
        const [countTres, setCountTres] = useState(0);
        const aumentarTres = () => {
          setCountTres(countTres + 1); 
        };
        const diminuirTres = () => {
          setCountTres(countTres - 1); 
        };
    

        
            const goToCardapioDois = () => {
                window.location.href = '/detalhesCliente'; // Redireciona para a página "/cardapio"
              };
    
    return (
        <>
            <NavBarCliente />
            <div className={styles["container_pai"]}>
                <div className={styles["container_foto"]}>
                <img className ={styles["bolofoto"]} src={bolo}/>
                </div>

                <div className={styles["container_elementos"]}>
                    <h1 className={styles["container_titulo"]}>Bolo sensação</h1>
                    <p className={styles["container_paragrafo"]}>O bolo Sensação é uma sobremesa que combina o sabor marcante do chocolate com a frescura dos morangos. Feito com camadas de massa de chocolate úmida.</p>
                
                <p className={styles["dinheiro"]}>R$:00.00</p>
                
                    <div className={styles["container_encomenda"]}>
                        <p className={styles["paragrafoTamanho"]} >Tamanho:1,0Kg</p>
                        <button onClick={goToCardapioDois} className={styles["container_botao"]}>Encomendar</button>
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
                                <button onClick={aumentar} className={styles["botaoAdicionar"]}>+</button>
                                <div className={styles["num"]}>
                                <p className={styles["paragrafoUm"]}>{count}</p>
                                </div>
                                <button onClick={diminuir} className={styles["botaoAdicionar"]}>-</button>
                            </div>
                        </div>
                        <div className={styles["container_filhoAdicionar"]}>
                            <div className={styles["container_adicional"]}>
                                <p className={styles["Morango"]} >Morango: R$00,00</p>
                            
                            </div>

                            <div className={styles["container_botaoPaiAdicionarBanana"]}>
                                <button onClick={aumentarDois} className={styles["botaoAdicionar"]}>+</button>
                                <div className={styles["num"]}>
                                <p className={styles["paragrafoUm"]}>{countDois}</p>
                                </div>
                                <button onClick={diminuirDois} className={styles["botaoAdicionar"]}>-</button>
                            </div>
                        </div>

                        <div className={styles["container_filhoAdicionar"]}>
                            <div className={styles["container_adicional"]}>
                                <p className={styles["Morango"]} >Morango: R$00,00</p>
                                
                            </div>

                            <div className={styles["container_botaoPaiAdicionarBanana"]}>
                                <button onClick={aumentarTres} className={styles["botaoAdicionar"]}>+</button>
                                <div className={styles["container_zero"]}>
                                <div className={styles["num"]}>
                                <p className={styles["paragrafoUm"]}>{countTres}</p>
                                </div>
                                </div>
                                <button onClick={diminuirTres} className={styles["botaoAdicionar"]}>-</button>
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
                <button onClick={goToCardapioDois} className={styles["container_botaodois"]}>Encomendar</button>
                </div>


                </div>
            </div>
        </>
    )
}

export default EncomendaCliente;
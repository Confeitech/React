import React from "react";
import styles from "./CardCardapioCliente.module.css";
import bolo from "../../utils/Detalhes/Bolo-Sensacao-01.webp"
import boloMorango from "../../utils/Detalhes/bolo-de-morango-aniversario.jpg"
import boloFloresta from "../../utils/Detalhes/floresta-negra-cod-374.jpg"
import boloChocolate from "../../utils/Detalhes/boloChocolate.jpg"



const CardCardapio = ({ index, nome, descricao, preco }) => {



    const goToCardapio = () => {
        sessionStorage.setItem("index",index)

        window.location.href = '/encomendaCliente'; // Redireciona para a página "/cardapio"

    };
    return (
        <div className={styles["row"]}>
            <div className={styles["card"]}>
                <div className={styles["imagem"]}>
                    <img className={styles["fotosbolo"]} src={boloFloresta} alt="" />
                </div>
                <div className={styles["details"]}>
                    <h3 className={styles["h3_cardCardapio"]}>{nome}</h3>
                    <h5 className={styles["h5_cardCardapio"]}>{descricao}</h5>
                </div>
                <div className={styles["price"]}>
                    <h2 className={styles["dindin"]}>R$ {preco}</h2>
                    <button onClick={() => goToCardapio()} className={styles["buttonEdit"]}>Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
    );
};

export default CardCardapio;



















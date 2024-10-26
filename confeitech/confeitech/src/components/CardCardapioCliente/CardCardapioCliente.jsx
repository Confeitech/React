import React from "react";
import styles from "./CardCardapioCliente.module.css";
import bolo from "../../utils/Detalhes/Bolo-Sensacao-01.webp"
import boloMorango from "../../utils/Detalhes/bolo-de-morango-aniversario.jpg"
import boloFloresta from "../../utils/Detalhes/floresta-negra-cod-374.jpg"
import boloChocolate from "../../utils/Detalhes/boloChocolate.jpg"



const CardCardapio = () => {
    const goToCardapio = () => {
        window.location.href = '/encomendaCliente'; // Redireciona para a página "/cardapio"
      };
    return (
        
        <div className={styles["row"]}>
            <div className={styles["card"]}>
                <div className={styles["imagem"]}>
                    <img  className={styles["fotosbolo"]} src={boloMorango} alt="" />
                </div>
                <div className={styles["details"]}>
                    <h3 className={styles["h3_cardCardapio"]}>Bolo de Morango</h3>
                    <h5 className={styles["h5_cardCardapio"]}>Um bolo de morango é uma sobremesa leve e irresistível, feita com camadas fofas de massa, creme suave e pedaços de morango fresco.</h5>
                </div>
                <div className={styles["price"]}>
                    <h2  className={styles["dindin"]}>R$ 89,90</h2>
                    <button onClick={goToCardapio} className={styles["buttonEdit"]}>Comprar Bolo</button>
                </div>
            </div>
            <div className={styles["card"]}>
                <div className={styles["imagem"]}>
                    <img className={styles["fotosbolo"]} src={bolo}  alt="" />
                </div>
                <div className={styles["details"]}>
                    <h3>Bolo Sensação</h3>
                    <h5>O bolo Sensação é uma sobremesa que combina o sabor marcante do chocolate com a frescura dos morangos. Feito com camadas de massa de chocolate úmida.</h5>
                </div>
                <div className={styles["price"]}>
                    <h2 className={styles["dindin"]}>R$ 89,90</h2>
                    <button onClick={goToCardapio} className={styles["buttonEdit"]}>Comprar Bolo</button>
                </div>
            </div>
            <div className={styles["card"]}>
                <div className={styles["imagem"]}>
                    <img  className={styles["fotosbolo"]}src={boloFloresta} alt="" />
                </div>
                <div className={styles["details"]}>
                    <h3>Bolo de Floresta Negra</h3>
                    <h5>O bolo Floresta Negra é um clássico da confeitaria alemã, famoso por suas camadas generosas de massa de chocolate, intercaladas com chantilly fresco e cerejas em calda.</h5>
                </div>
                <div className={styles["price"]}>
                    <h2 className={styles["dindin"]}>R$ 89,90</h2>
                    <button onClick={goToCardapio} className={styles["buttonEdit"]}>Comprar Bolo</button>
                </div>
            </div>
            <div className={styles["card"]}>
                <div className={styles["imagem"]}>
                    <img className={styles["fotosbolo"]} src={boloChocolate}  alt="" />
                </div>
                <div className={styles["details"]}>
                    <h3>Bolo de Chocolate</h3>
                    <h5>O bolo de chocolate é um clássico irresistível, feito com uma massa rica e úmida, onde o sabor intenso do cacau se destaca a cada mordida. Pode ser recheado com brigadeiro ou ganache.</h5>
                </div>
                <div className={styles["price"]}>
                    <h2 className={styles["dindin"]}>R$ 89,90</h2>
                    <button onClick={goToCardapio} className={styles["buttonEdit"]}>Comprar Bolo</button>
                </div>
            </div>
        </div>
    );
};

export default CardCardapio;
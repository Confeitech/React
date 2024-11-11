import React from "react";
import styles from "./CardCardapio.module.css";
import { useNavigate } from "react-router-dom";
import imgBolo from "../../utils/assets/fatia-de-bolo-de-chocolate-recheado-com-creme-marrom-e-morango-por-cima_993044-36.avif";

const CardCardapio = ({ index, nome, descricao, preco }) => {
  const navigate = useNavigate(); // Hook do React Router para navegação

  const handleEditCakeClick = (index) => {
    sessionStorage.setItem("index", index);
    console.log("index", index);
    navigate("/modificar-bolo"); // Navega para a página /about
  };

  return (
    <div className={styles["row"]}>
      <div className={styles["card"]}>
        <div className={styles["imagem"]}>
          <img
            className={styles["imagemBolo"]}
            src={imgBolo}
            alt="Bolo de chocolate"
          />
        </div>
        <div className={styles["details"]}>
          <h3 className={styles["h3_cardCardapio"]}>{nome || "NA"}</h3>
          <h5 className={styles["h5_cardCardapio"]}>{descricao || "NA"}</h5>
        </div>
        <div className={styles["price"]}>
          <h2>R$ {preco || "NA"}</h2>
          <button
            className={styles["buttonEdit"]}
            onClick={() =>handleEditCakeClick(index)}
          >
            Modificar Bolo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCardapio;

import React from "react";
import styles from "./CardCardapio.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

const CardCardapio = ({ index, nome, descricao, preco }) => {
  const [image, setimage] = useState();
  const navigate = useNavigate();

  const handleEditCakeClick = (index) => {
    sessionStorage.setItem("index", index);
    navigate("/modificar-bolo");
  };

  useEffect(() => {
    api
      .get("/cakes/imagem/" + index, { responseType: "blob" })  // Define o tipo de resposta como "blob"
      .then((response) => {
        const imageUrl = URL.createObjectURL(response.data);  // Cria uma URL a partir do Blob
        setimage(imageUrl);  // Armazena a URL no estado
      })
      .catch((error) => {
        console.log(error);
      });
  }, [index]);  // Adicionando index como dependência para re-fetch se necessário


  return (
    <div className={styles["row"]}>
      <div className={styles["card"]}>
        <div className={styles["imagem"]}>
          <img
            className={styles["imagemBolo"]}
            src={image}
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
            onClick={() => handleEditCakeClick(index)}
          >
            Modificar Bolo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCardapio;

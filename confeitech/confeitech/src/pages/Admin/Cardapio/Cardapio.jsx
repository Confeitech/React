import React, { useEffect, useState } from "react";
import api from "../../../api";
import styles from "./Cardapio.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import CardCardapio from "../../../components/CardCardapio/CardCardapio";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cardapio = () => {
  const navigate = useNavigate(); // Hook do React Router para navegação

  const handleClick = () => {
    navigate("/novo-bolo"); // Navega para a página /about
  };

  const desfazer = () => {
    api.patch("/cakes/desfazer", {
      id: 1,
    }).then((response) => {
      toast.success("Desfeito com sucesso!");
      window.location.reload();
    }).catch((error) => {
      toast.error("Não há bolo para ser desfeito!");
    });
  }

  const [cardsData, setCardsData] = useState();

  const recuperarValorDoCard = () => {
    api
      .get("/cakes")
      .then((response) => {
        const { data } = response;
        console.log(data);
        setCardsData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    recuperarValorDoCard();
  }, []);

  return (
    <div className={styles["body"]}>
      <NavBarAdmin className={styles["Nav"]} />
      <div className={styles["cardapio"]}>
        <div className={styles["content"]}>
          <div className={styles["text"]}>
            <span className={styles["span_cardapio"]}></span>
            <span className={styles["span_cardapio"]}>
              <h1 className={styles["h1_cardapio"]}>Cardápio de Delicias</h1>
            </span>
            <span className={styles["span_cardapioRight"]}>
              <button
                className={styles["button_cardapio"]}
                onClick={handleClick}
              >
                NOVO BOLO +
              </button>
              <button
                className={styles["button_cardapio"]}
                onClick={desfazer}
              >
                Desfazer
              </button>
            </span>
          </div>
          <div className={styles["table"]}>
            {cardsData &&
              cardsData.map((data, index) => (
                <div key={index} className={styles["divCardapio"]}>
                  <CardCardapio
                    index={data.id}
                    nome={data.nome}
                    descricao={data.descricao}
                    preco={data.preco}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardapio;

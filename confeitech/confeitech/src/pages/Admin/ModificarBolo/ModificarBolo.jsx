import { React, useState, useEffect } from "react";
import styles from "./ModificarBolo.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import check from "../../../utils/assets/verifica.png";
import cancel from "../../../utils/assets/cancelar.png";
import api from "../../../api";
import Adicionais from "../../../components/rowTabelaAdicionais/Adicionais";


const ModificarBolo = () => {
  let id = sessionStorage.getItem("index");
  const [cardsData, setCardsData] = useState();

  const getCakesData = () => {
    api
      .get("/cakes/" + id)
      .then((response) => {
        const { data } = response;
        console.log(data);
        setCardsData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkIdNull = () => {
    if (id === null) {
      window.location.href = "/cardapio";
    }
  };

  const funcaoAdicionar = () => {
    if (cardsData?.adicionais) {
      if (Array.isArray(cardsData?.adicionais)) {
        return cardsData?.adicionais.map((data, index) => (
          <Adicionais key={index} index={index} adicionais={data} />
        ));
      }
    }
  };

  const salvarEdicao = () => {
    api
      .put("/cakes/" + id, {
        id: id,
        nome: cardsData?.nome,
        peso: 0,
        preco: cardsData?.preco,
        descricao: cardsData?.descricao,
        ativo: true,
        adicionais: cardsData?.adicionais,
      })
      .then(() => {
        console.log("oi");
        sessionStorage.removeItem("index");
        window.location.href = "/cardapio";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletarBolo = () => {
    api
      .delete("/cakes/" + id)
      .then(() => {
        sessionStorage.removeItem("index");
        window.location.href = "/cardapio";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const adcAdicionais = () => {
    const novoAdicional = { nome: "", preco: 0 }; // Crie o adicional com propriedades vazias
    setCardsData((prevData) => ({
      ...prevData,
      adicionais: [...prevData.adicionais, novoAdicional], // Adiciona o novo adicional ao array de adicionais
    }));

    console.log(cardsData);
  };

  useEffect(() => {
    getCakesData();
    checkIdNull();
  }, [id]);
  return (
    <div className={styles["corpo"]}>
      <NavBarAdmin />
      <div className={styles["editCake"]}>
        <div className={styles["editLeft"]}>
          <div className={styles["contentEditLeft"]}>
            <h3 className={styles["link"]}>Modificar imagem +</h3>
            <div className={styles["editImage"]}></div>
          </div>
        </div>
        <div className={styles["editRight"]}>
          <div className={styles["boxEditRight"]}>
            <div className={styles["contentEditRight"]}>
              <div className={styles["titleEdit"]}>
                <h2>{cardsData?.nome}</h2>
                <h3 className={styles["link"]}>Modificar Nome +</h3>
              </div>
              <div className={styles["midEdit"]}>
                <textarea
                  placeholder={cardsData?.descricao}
                  type="text"
                  className={styles["inputEdit"]}
                />
                <h3 className={styles["link"]}>Modificar Descrição +</h3>
              </div>
              <div className={styles["titleEdit"]}>
                <h2 className={styles["priceEdit"]}>R$: {cardsData?.preco}</h2>
                <h3 className={styles["link"]}>Modificar Preço +</h3>
              </div>
              <div className={styles["buttonsEdit"]}>
                <button className={styles["buttonPurple"]}>1,0kg</button>
                <button className={styles["buttonPurple"]}>1,0kg</button>
                <button className={styles["buttonPurple"]}>1,0kg</button>
                <button className={styles["buttonWhite"]}>+</button>
              </div>
              <div className={styles["tabelaEdit"]}>
                {funcaoAdicionar()}
              </div>
              <div className={styles["buttonsSpace"]}>
                <button className={styles["buttonAdd"]}
                  onClick={() => adcAdicionais()}
                >Adicionar+</button>
              </div>
              <div className={styles["check"]}>
                <div className={styles["fix"]}>
                  <div className={styles["colum"]} onClick={() => salvarEdicao()}>
                    <h5>Concluir</h5>
                    <img
                      src={check}
                      alt="Check"
                      className={styles["imagens"]}
                    />
                  </div>
                  <div className={styles["colum"]} onClick={() => deletarBolo()}>
                    <h5>Excluir</h5>
                    <img
                      src={cancel}
                      alt="Cancel"
                      className={styles["imagens"]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModificarBolo;

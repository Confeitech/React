import { React, useState, useEffect } from "react";
import styles from "./ModificarBolo.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import check from "../../../utils/assets/verifica.png";
import cancel from "../../../utils/assets/cancelar.png";
import api from "../../../api";
import Adicionais from "../../../components/rowTabelaAdicionais/Adicionais";
import { ToastContainer, toast } from "react-toastify";

const ModificarBolo = () => {
  let id = sessionStorage.getItem("index");
  const [cardsData, setCardsData] = useState();

  const [nomeBolo, setNomeBolo] = useState();
  const [precoBolo, setPrecoBolo] = useState();
  const [descricaoBolo, setDescricaoBolo] = useState();

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

  // const funcaoAdicionar = () => {
  //   if (cardsData?.adicionais) {
  //     if (Array.isArray(cardsData?.adicionais)) {
  //       return cardsData?.adicionais.map((data, index) => (
  //         <Adicionais key={index} index={index} adicionais={data} />
  //       ));
  //     }
  //   }
  // };

  const salvarEdicao = () => {
    if (nomeBolo === undefined || descricaoBolo === undefined || precoBolo === undefined) {
      toast.error("Preencha todos os campos!");
    } else {

      api
        .put("/cakes/" + id, {
          id: id,
          nome: nomeBolo,
          peso: 0,
          preco: precoBolo,
          descricao: descricaoBolo,
          ativo: true,
          adicionais: cardsData?.adicionais,
        })
        .then(() => {
          toast.success("Bolo editado com sucesso!");
          sessionStorage.removeItem("index");
          window.location.href = "/cardapio";
        })
        .catch((error) => {
          toast.error("Erro ao editar bolo");
          console.log(error);
        });
    };
  }

  const deletarBolo = () => {
    api
      .delete("/cakes/" + id)
      .then(() => {
        sessionStorage.removeItem("index");
        toast.success("Bolo deletado com sucesso!");
        window.location.href = "/cardapio";
      })
      .catch((error) => {
        toast.error("Erro ao deletar bolo");
        console.log(error);
      });
  };

  // const adcAdicionais = () => {
  //   const novoAdicional = { nome: "", preco: 0 }; // Crie o adicional com propriedades vazias
  //   setCardsData((prevData) => ({
  //     ...prevData,
  //     adicionais: [...prevData.adicionais, novoAdicional], // Adiciona o novo adicional ao array de adicionais
  //   }));

  //   console.log(cardsData);
  // };

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
                <textarea
                  placeholder={cardsData?.nome}
                  id="nomeBolo"
                  className={styles["text"]}
                  value={nomeBolo}
                  onChange={(e) => setNomeBolo(e.target.value)}
                ></textarea>
                <label htmlFor="nomeBolo" className={styles["link"]}>Modificar Nome +</label>
              </div>
              <div className={styles["midEdit"]}>
                <textarea
                  id="descricaoBolo"
                  placeholder={cardsData?.descricao}
                  type="text"
                  className={styles["inputEdit"]}
                  value={descricaoBolo}
                  onChange={(e) => setDescricaoBolo(e.target.value)}
                />
                <label htmlFor="descricaoBolo" className={styles["link"]}>Modificar Descrição +</label>
              </div>
              <div className={styles["titleEdit"]}>
                <div className={styles["precinho"]}>
                  R$:
                </div>
                <textarea
                  id="precoBolo"
                  className={styles["text"]}
                  placeholder={cardsData?.preco}
                  value={precoBolo}
                  onChange={(e) => setPrecoBolo(e.target.value)}
                ></textarea>
                <label htmlFor="precoBolo" className={styles["link"]}>Modificar Preço +</label>
              </div>
              <div className={styles["buttonsEdit"]}>
                <button className={styles["buttonPurple"]}>1,0kg</button>
                <button className={styles["buttonPurple"]}>1,0kg</button>
                <button className={styles["buttonPurple"]}>1,0kg</button>
                <button className={styles["buttonWhite"]}>+</button>
              </div>
              {/* <div className={styles["tabelaEdit"]}>
                {funcaoAdicionar()}
              </div>
              <div className={styles["buttonsSpace"]}>
                <button className={styles["buttonAdd"]}
                  onClick={() => adcAdicionais()}
                >Adicionar+</button>
              </div> */}
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

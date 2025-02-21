import { React, useState, useEffect } from "react";
import styles from "./ModificarBolo.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import check from "../../../utils/assets/verifica.png";
import cancel from "../../../utils/assets/cancelar.png";
import api from "../../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ModificarBolo = () => {
  let id = sessionStorage.getItem("index");
  const [cardsData, setCardsData] = useState();
  const navigate = useNavigate();

  const [nomeBolo, setNomeBolo] = useState();
  const [precoBolo, setPrecoBolo] = useState();
  const [descricaoBolo, setDescricaoBolo] = useState();
  const [imagem, setImagem] = useState();

  const getCakesData = () => {
    api
      .get("/cakes/" + id)
      .then((response) => {
        const { data } = response;
        console.log(data);
        setCardsData(data);
        setNomeBolo(data.nome);
        setPrecoBolo(data.preco);
        setDescricaoBolo(data.descricao);
      })
      .catch((error) => {
        console.log(error);
      });

    api
      .get("/cakes/imagem/" + id, { responseType: "blob" })  // Define o tipo de resposta como "blob"
      .then((response) => {
        const imageUrl = URL.createObjectURL(response.data);  // Cria uma URL a partir do Blob
        setImagem(imageUrl);  // Armazena a URL no estado
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkIdNull = () => {
    if (id === null) {
      navigate("/cardapio");
    }
  };

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
          navigate("/cardapio");
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
        toast.success("Bolo deletado com sucesso!");
        sessionStorage.removeItem("index");
        navigate("/cardapio");
      })
      .catch((error) => {
        toast.error("Erro ao deletar bolo");
        console.log(error);
      });
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
            <h3 className={styles["link"]}></h3>
            <div className={styles["editImage"]}>
              {imagem ? <img src={imagem} alt="Imagem do bolo" className={styles["fotoBolo"]} /> : "Carregando..."}
            </div>
          </div>
        </div>
        <div className={styles["editRight"]}>
          <div className={styles["boxEditRight"]}>
            <div className={styles["contentEditRight"]}>
              <div className={styles["titleEdit"]}>
                <textarea
                  id="nomeBolo"
                  className={styles["text1"]}
                  value={nomeBolo}
                  onChange={(e) => setNomeBolo(e.target.value)}
                ></textarea>
                <label htmlFor="nomeBolo" className={styles["link"]}>Modificar Nome +</label>
              </div>
              <div className={styles["midEdit"]}>
                <textarea
                  id="descricaoBolo"
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
                  value={precoBolo}
                  onChange={(e) => setPrecoBolo(e.target.value)}
                ></textarea>
                <label htmlFor="precoBolo" className={styles["link"]}>Modificar Preço +</label>
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

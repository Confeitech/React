import React, { useState, useEffect, act } from "react";
import styles from "./Ingredientes.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import excluir from "../../../utils/assets/excluir.png";
import editar from "../../../utils/assets/editar.png";
import api from "../../../api";

const Ingredientes = () => {
  const estiloTabela = {
    textAlign: "center",
    height: "50px",
    border: "1px solid #000",
  };
  const estiloTituloTabela = {
    backgroundColor: "#D9D9D9",
    height: "25px",
  };
  const estiloBotao = {
    width: "25px",
    height: "25px",
    margin: "5px",
    cursor: "pointer",
  };

  const [cardsData, setCardsData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  const getData = () => {
    api
      .get("/adicionais")
      .then((response) => {
        const { data } = response;
        setCardsData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const row = () => {
    return cardsData.map((item) => (
      <tr key={item?.id}>
        <td style={estiloTabela}>{item?.nome}</td>
        <td style={estiloTabela}>R$ {item?.preco}</td>
        <td style={estiloTabela}>
          <img src={excluir} alt="Excluir" style={estiloBotao} onClick={() => openModal(item.id)} />
          <img src={editar} alt="Editar" style={estiloBotao} onClick={() => openModalEdit(item.id)} />
        </td>
      </tr>
    ));
  }

  const openModal = (id) => {
    setSelectedId(id);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
    setSelectedId(null);
  }


  const openModalEdit = (id) => {
    setSelectedId(id);
    setShowModalEdit(true);
  }
  const closeModalEdit = () => {
    setShowModalEdit(false);
    setSelectedId(null);
  }

  const openModalAdd = () => {
    setShowModalAdd(true);
  }
  const closeModalAdd = () => {
    setShowModalAdd(false);
  }

  const salvarAdicional = () => {
    api
      .put("/adicionais/" + selectedId, {
        id: selectedId,
        active: true,
        nome: nome,
        preco: preco,
      })
      .then(() => {
        console.log("Salvo");
        getData(); // Atualiza a lista completa de ingredientes
        closeModalEdit();
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleInputChange = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  };

  const excluirAdicional = () => {
    api
      .delete("/adicionais/" + selectedId)
      .then(() => {
        console.log("Excluído");
        getData();
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const addAdicional = () => {
    api
      .post("/adicionais", {
        active: true,
        nome: nome,
        preco: preco,
      })
      .then(() => {
        console.log("Adicionado");
        getData();
        closeModalAdd();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles["body"]}>
      <NavBarAdmin />
      <div className={styles["content"]}>
        <div className={styles["box"]}>
          <h1>Adicionais</h1>
          <div className={styles["space"]}>
            <table className={styles["tabela"]}>
              <thead style={estiloTituloTabela}>
                <tr>
                  <th>Adicional</th>
                  <th>Valor</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {row()}
              </tbody>
            </table>
          </div>
          <button className={styles["buttonAdd"]} onClick={openModalAdd}>Adicionar ingrediente</button>
        </div>
      </div>

      {showModal && (
        <div className={styles["modal-overlay"]}>
          <div className={styles["modal"]}>
            <h2>Confirmação</h2>
            <p>Tem certeza de que deseja excluir este item?</p>
            <span className={styles["fixButtons"]}>
              <button className={styles["buttonS"]} onClick={excluirAdicional}>Sim</button>
              <button className={styles["buttonN"]} onClick={closeModal}>Cancelar</button>
            </span>
          </div>
        </div>
      )}

      {showModalEdit && (
        <div className={styles["modal-overlay"]}>
          <div className={styles["modal"]}>
            <h2>Editar ingrediente</h2>
            <input type="text" placeholder="Nome" onChange={(e) => handleInputChange(e, setNome)} />
            <input type="text" placeholder="Valor" onChange={(e) => handleInputChange(e, setPreco)} />
            <span className={styles["fixButtons"]}>
              <button className={styles["buttonS"]} onClick={salvarAdicional}>Salvar</button>
              <button className={styles["buttonN"]} onClick={closeModalEdit}>Cancelar</button>
            </span>
          </div>
        </div>
      )}

      {showModalAdd && (
        <div className={styles["modal-overlay"]}>
          <div className={styles["modal"]}>
            <h2>Adicionar ingrediente</h2>
            <input type="text" placeholder="Nome" onChange={(e) => handleInputChange(e, setNome)} />
            <input type="text" placeholder="Valor" onChange={(e) => handleInputChange(e, setPreco)} />
            <span className={styles["fixButtons"]}>
              <button className={styles["buttonS"]} onClick={addAdicional}>Adicionar</button>
              <button className={styles["buttonN"]} onClick={closeModalAdd}>Cancelar</button>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ingredientes;

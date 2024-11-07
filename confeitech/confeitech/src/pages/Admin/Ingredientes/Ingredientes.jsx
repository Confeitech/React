import React from "react";
import styles from "./Ingredientes.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import excluir from "../../../utils/assets/excluir.png";
import editar from "../../../utils/assets/editar.png";

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
                  <th>Peso</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={estiloTabela}>Paçoca</td>
                  <td style={estiloTabela}>R$ 0,00</td>
                  <td style={estiloTabela}>0 gramas</td>
                  <td style={estiloTabela}>
                    <img src={excluir} alt="Excluir" style={estiloBotao} />
                    <img src={editar} alt="Editar" style={estiloBotao} />
                  </td>
                </tr>
                <tr>
                  <td style={estiloTabela}>Paçoca</td>
                  <td style={estiloTabela}>R$ 0,00</td>
                  <td style={estiloTabela}>0 gramas</td>
                  <td style={estiloTabela}>
                    <img src={excluir} alt="Excluir" style={estiloBotao} />
                    <img src={editar} alt="Editar" style={estiloBotao} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className={styles["buttonAdd"]}>Adicionar ingrediente</button>
        </div>
      </div>
    </div>
  );
};

export default Ingredientes;

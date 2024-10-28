import React from "react";
import styles from "./Ingredientes.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";

const Ingredientes = () => {
    const estiloTabela = {textAlign: "center", height: "50px", border: "1px solid #000"};
    const estiloTituloTabela = {backgroundColor: "#D9D9D9", height: "25px"};
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
                                    <td style={estiloTabela}>Excluir</td>
                                </tr>
                                <tr>
                                    <td style={estiloTabela}>Paçoca</td>
                                    <td style={estiloTabela}>R$ 0,00</td>
                                    <td style={estiloTabela}>0 gramas</td>
                                    <td style={estiloTabela}>Excluir</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ingredientes;
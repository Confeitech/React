import { React } from "react";
import styles from "./Adicionais.module.css";

const Adicionais = ({ index, adicionais }) => {
    const number = 0;

    console.log("adicionais" + adicionais)
  return (
    <div className={styles["card"]}>
      <div className={styles["detailsCard"]}>
        <h3>{adicionais?.nome || "Sem nome"}</h3>
        <h3 style={{ color: "#1B5519" }}>+ R${adicionais?.preco || "0,00"}</h3>
      </div>
      <div className={styles["buttonsCard"]}>
        <button>-</button>
        <div className={styles["number"]}>
          <h3>{number}</h3>
        </div>
        <button>+</button>
      </div>
      <div className={styles["meio"]}>
        <h3 className={styles["link"]}>Modificar +</h3>
      </div>
    </div>
  );
};

export default Adicionais;

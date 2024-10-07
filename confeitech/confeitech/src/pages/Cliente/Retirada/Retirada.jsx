import React from "react";
import styles from "./Retirada.module.css";

const Retirada = () => {
    return (
        <>

            <div className={styles["container_paiRetirada"]}>
                <h1 className={styles["gambh"]}>Retirada</h1>
                <p>Escolha um dia e horário para realizar a retirada:</p>
                <div className={styles["ajuste"]}>
                    <p>Horario:</p>
                </div>
                <div className={styles["separacao"]}>
                    <input className={styles["horario"]} type="text" placeholder="13h" />
                    <input className={styles["horario"]} type="text" placeholder="30m" />
                    <input className={styles["horario"]} type="text" placeholder="59s" />
                </div>
                <div className={styles["data"]}>
                    <p>Data</p>
                    <button className={styles["esocolherData"]}>Escolher Data</button>
                </div>
            </div>

        </>
    )
}
export default Retirada;
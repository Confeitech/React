import React, { useEffect } from "react";
import styles from "./NovoBolo.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";

const NovoBolo = () => {
    return (
        <div className={styles["body"]}>
            <NavBarAdmin />
            <div className={styles["newCake"]}>
                <div className={styles["boxNew"]}>
                    <div className={styles["contentCake"]}>
                        <div className={styles["titleCake"]}>
                            <h1>Titulo</h1>
                            <h3 className={styles["link"]}>Modificar Nome +</h3>
                        </div>
                        <div className={styles["midCake"]}>
                            <input type="text" className={styles["inputCake"]} />
                            <h3 className={styles["link"]}>Modificar Descrição +</h3>
                        </div>
                        <div className={styles["titleCake"]}>
                            <h1 className={styles["priceCake"]}>R$: 00,00</h1>
                            <h3 className={styles["link"]}>Modificar Preço +</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NovoBolo;
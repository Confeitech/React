import React from "react";
import styles from "./Encomendas.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";

const Encomendas = () => {
    return (
        <>
            <NavBarAdmin />
            <div className={styles["encomendas"]}>
                <div className={styles["content"]}>
                    <h1>Encomendas</h1>
                    
                </div>
            </div>
        </>
    );
};

export default Encomendas;
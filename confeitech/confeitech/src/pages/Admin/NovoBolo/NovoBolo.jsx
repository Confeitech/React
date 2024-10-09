import React,{useEffect} from "react";
import styles from "./NovoBolo.module.css";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";

const NovoBolo = () => {
    return(
        <div className={styles["body"]}>
            <NavBarAdmin />
            <div className={styles["newCake"]}>
                <div className={styles["boxNew"]}>
                    <div className={styles["titleCake"]}>
                        <h1>Titulo</h1>
                        <h3>Modificar Nome +</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NovoBolo;
import React from "react";
import styles from "./NavBarAdmin.module.css";

const NavBarAdmin = () => {
    return (
        <nav className={styles["navbar"]}>
            <div className={styles["content"]}>
                <div className={styles["text"]}>
                    <h1>
                        Cakes AriCroce
                    </h1>
                    <h3>
                        Bolos para todos os momentos
                    </h3>
                </div>
                <div className={styles["navigation"]}>
                    <a>Encomendas</a>
                    <a>Cardápio</a>
                    <a>Bolos</a>
                    <a>Relatórios</a>
                </div>
            </div>
        </nav>
    );
};
export default NavBarAdmin;

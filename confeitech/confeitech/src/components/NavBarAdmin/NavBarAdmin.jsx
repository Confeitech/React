import React from "react";
import styles from "./NavBarAdmin.module.css";
import { useLocation } from "react-router-dom";

const underlineLocation = (pathname) => {
    if (pathname === "/encomendas") {
        return (
            <div className={styles["options"]}>
                <a href="/encomendas" className={styles["active"]}>Encomendas</a>
                <a href="/cardapio">Cardápio</a>
                <a>Bolos</a>
                <a>Relatórios</a>
            </div>
        );
    } else if (pathname === "/cardapio") {
        return (
            <div className={styles["options"]}>
                <a href="/encomendas">Encomendas</a>
                <a href="/cardapio" className={styles["active"]}>Cardápio</a>
                <a>Bolos</a>
                <a>Relatórios</a>
            </div>
        )
    } else if (pathname === "/bolos") {
        return (
            <div className={styles["options"]}>
                <a href="/encomendas">Encomendas</a>
                <a href="/cardapio">Cardápio</a>
                <a href="/bolos" className={styles["active"]}>Bolos</a>
                <a>Relatórios</a>
            </div>
        )
    } else if (pathname === "/relatorios") {
        return (
            <div className={styles["options"]}>
                <a href="/encomendas">Encomendas</a>
                <a href="/cardapio">Cardápio</a>
                <a>Bolos</a>
                <a href="/relatorios" className={styles["active"]}>Relatórios</a>
            </div>
        )
    }

};

const NavBarAdmin = () => {
    const location = useLocation();
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
                {underlineLocation(location.pathname)}
            </div>
        </nav>
    );
};

export default NavBarAdmin;

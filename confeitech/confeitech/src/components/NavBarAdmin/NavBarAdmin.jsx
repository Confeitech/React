import React from "react";
import styles from "./NavBarAdmin.module.css";
import { useLocation } from "react-router-dom";

const underlineLocation = (pathname) => {
    if (pathname === "/encomendas") {
        return (
            <div className={styles["options"]}>
                <a href="/encomendas" className={styles["active"]}>Encomendas</a>
                <a href="/cardapio" className={styles["a_options"]}>Cardápio</a>
                <a href="/Adicionais" className={styles["a_options"]}>Adicionais</a>
                <a href="/relatorioAdmin" className={styles["a_options"]}>Relatórios</a>
            </div>
        );
    } else if (pathname === "/cardapio") {
        return (
            <div className={styles["options"]}>
                <a href="/encomendas" className={styles["a_options"]}>Encomendas</a>
                <a href="/cardapio" className={styles["active"]}>Cardápio</a>
                <a href="/Adicionais" className={styles["a_options"]}>Adicionais</a>
                <a href="/relatorioAdmin" className={styles["a_options"]}>Relatórios</a>
            </div>
        )
    } else if (pathname === "/Adicionais") {
        return (
            <div className={styles["options"]}>
                <a href="/encomendas" className={styles["a_options"]}>Encomendas</a>
                <a href="/cardapio" className={styles["a_options"]}>Cardápio</a>
                <a href="/Adicionais" className={styles["active"]}>Adicionais</a>
                <a href="/relatorioAdmin" className={styles["a_options"]}>Relatórios</a>
            </div>
        )
    } else if (pathname === "/relatorioAdmin") {
        return (
            <div className={styles["options"]}>
                <a href="/encomendas" className={styles["a_options"]}>Encomendas</a>
                <a href="/cardapio" className={styles["a_options"]}>Cardápio</a>
                <a href="/Adicionais" className={styles["a_options"]}>Adicionais</a>
                <a href="/relatorioAdmin" className={styles["active"]}>Relatórios</a>
            </div>
        )
    }
    return (
        <div className={styles["options"]}>
            <a href="/encomendas" className={styles["a_options"]}>Encomendas</a>
            <a href="/cardapio" className={styles["a_options"]}>Cardápio</a>
            <a href="/Adicionais" className={styles["a_options"]}>Adicionais</a>
            <a href="/relatorioAdmin" className={styles["a_options"]}>Relatórios</a>
        </div>
    );

};

const NavBarAdmin = () => {
    const location = useLocation();
    return (
        <nav className={styles["navbar"]}>
            <div className={styles["content"]}>
                <div className={styles["text"]}>
                    <h1 className={styles["logo"]}>
                        Cakes AriCroce
                    </h1>
                    <h3 className={styles["frase"]}>
                        Bolos para todos os momentos
                    </h3>
                </div>
                {underlineLocation(location.pathname)}
            </div>
        </nav>
    );
};

export default NavBarAdmin;

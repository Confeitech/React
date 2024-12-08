import React from "react";
import styles from "./NavBarAdmin.module.css";
import { useLocation, Link } from "react-router-dom";

const NavBarAdmin = () => {
    const location = useLocation();

    // Definindo as rotas do menu com seus rótulos
    const routes = [
        { path: "/encomendas", label: "Encomendas" },
        { path: "/cardapio", label: "Cardápio" },
        { path: "/Adicionais", label: "Adicionais" },
        { path: "/relatorioAdmin", label: "Relatórios" },
    ];

    return (
        <nav className={styles["navbar"]}>
            <div className={styles["content"]}>
                <div className={styles["text"]}>
                    <h1 className={styles["logo"]}>Cakes AriCroce</h1>
                    <h3 className={styles["frase"]}>Bolos para todos os momentos</h3>
                </div>
                <div className={styles["options"]}>
                    {routes.map((route) => (
                        <Link
                            key={route.path}
                            to={route.path}
                            className={
                                location.pathname === route.path
                                    ? styles["active"]
                                    : styles["a_options"]
                            }
                        >
                            {route.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavBarAdmin;

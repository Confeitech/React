import React from "react";
import styles from "./NavBarCliente.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import carrinho from "../../utils/Detalhes/carrinho.png";
import pessoa from "../../utils/Detalhes/user.png";

const NavBarCliente = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const routes = [
    { path: "/cardapioCliente", label: "Cardápio" },
    { path: "/minhasEncomendas", label: "Encomendas" },
  ];

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["content"]}>
        <div className={styles["text"]}>
          <h1 className={styles["titulo"]}>Cakes AriCroce</h1>
          <h3 className={styles["tituloTres"]}>Bolos para todos os momentos</h3>
        </div>
        <div className={styles["options"]}>
          {routes.map((route) => (
            <a
              key={route.path}
              className={
                location.pathname === route.path ? styles["active"] : ""
              }
              onClick={() => navigate(route.path)}
            >
              {route.label}
            </a>
          ))}
          <div className={styles["icons"]}>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarCliente;

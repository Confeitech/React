import React from "react";
import styles from "./NavBarCliente.module.css"
import { useLocation } from "react-router-dom";


const underlineLocation = (pathname) => {
    if (pathname === "/encomendaCliente") {
        return (
            <div className={styles["options"]}>
                <a href="cardapioCliente" className={styles["active"]}>Cardápio</a>
                <a href="/encomendaCliente">Encomenda</a>
                /
            </div>
        );
    } else if (pathname === "/cardapioCliente") {
        return (
            <div className={styles["options"]}>
                <a href="/encomendasCliente">Encomendas</a>
                <a href="/cardapioCliente" className={styles["active"]}>Cardápio</a>
                
            </div>
        )
    } 
    else if (pathname === "/detalhesCliente") {
        return (
            <div className={styles["options"]}>
                <a href="/encomendasCliente">Encomendas</a>
                <a href="/cardapioCliente" className={styles["active"]}>Cardápio</a>
                
            </div>
        )
    } 

};

const NavBarCliente = () => {
    const location = useLocation();
    return (
        <>
         
        <nav className={styles["navbar"]}>
            <div className={styles["content"]}>
                <div className={styles["text"]}>
                    <h1 className={styles["titulo"]}>
                        Cakes AriCroce
                    </h1>
                    <h3 className={styles["tituloTres"]}>
                        Bolos para todos os momentos
                    </h3>
                </div>
                {underlineLocation(location.pathname)}
            </div>
        </nav>
        
    
        </>

    );


}
export default NavBarCliente;
import React from "react";
import styles from "./NavBarCliente.module.css"
import { useLocation } from "react-router-dom";
import carrinho from "../../utils/Detalhes/carrinho.png"
import pessoa from "../../utils/Detalhes/user.png"


const underlineLocation = (pathname) => {
    if (pathname === "/encomendaCliente") {
        return (
            <div className={styles["options"]}>
                <a href="cardapioCliente" className={styles["active"]}>Cardápio</a>
                <a href="/minhasEncomendas">Encomenda</a>
                <div className={styles["icons"]}>
                <img className={styles["carrinho"]} src={carrinho}/>
                <img className={styles["pessoa"]} src={pessoa}/>
                </div>
            </div>
        );
    } else if (pathname === "/cardapioCliente") {
        return (
            <div className={styles["options"]}>
                <a href="/cardapioCliente">Cardápio</a>
                <a href="/minhasEncomendas" className={styles["active"]}>Encomendas</a>
                <div className={styles["icons"]}>
                <img className={styles["carrinho"]} src={carrinho}/>
                <img className={styles["pessoa"]} src={pessoa}/>
                </div>
            </div>
        )
    } 
    else if (pathname === "/detalhesCliente") {
        return (
            <div className={styles["options"]}>
                <a href="/cardapioCliente">Cardápio</a>
                <a href="/minhasEncomendas" className={styles["active"]}>Encomendas</a>
                <div className={styles["icons"]}>
                <img className={styles["carrinho"]} src={carrinho}/>
                <img className={styles["pessoa"]} src={pessoa}/>
                </div>
            </div>
        )
    } 
    else if (pathname === "/minhasEncomendas") {
        return (
            <div className={styles["options"]}>
                <a href="/cardapioCliente">Cardápio</a>
                <a href="/minhasEncomendas" className={styles["active"]}>Encomendas</a>
                <div className={styles["icons"]}>
                <img className={styles["carrinho"]} src={carrinho}/>
                <img className={styles["pessoa"]} src={pessoa}/>
                </div>
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
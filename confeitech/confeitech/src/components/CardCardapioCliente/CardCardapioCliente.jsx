import React, { useEffect } from "react";
import styles from "./CardCardapioCliente.module.css";
import { useNavigate } from "react-router-dom";
import api from "../../api";


const CardCardapio = ({ index, nome, descricao, preco }) => {
    const navigate = useNavigate();
    const [image, setimage] = React.useState();


    const goToCardapio = () => {
        sessionStorage.setItem("index",index)

        navigate('/encomendaCliente'); // Redireciona para a página "/cardapio"

    };

    useEffect(() => {
        api
        .get("/cakes/imagem/" + index, { responseType: "blob" })  // Alterado para GET e responseType "blob"
        .then((response) => {
            const imageUrl = URL.createObjectURL(response.data);  // Cria uma URL a partir do Blob
            setimage(imageUrl);  // Armazena a URL no estado
            console.log(imageUrl);
        })
        .catch((error) => {
            console.error("Erro ao buscar a imagem:", error);
        });
    }, [index]);
    return (
        
        <div className={styles["row"]}>
            <div className={styles["card"]}>
                <div className={styles["imagem"]}>
                    <img className={styles["fotosbolo"]} src={image} alt="" />
                </div>
                <div className={styles["details"]}>
                    <h3 className={styles["h3_cardCardapio"]}>{nome}</h3>
                    <h5 className={styles["h5_cardCardapio"]}>{descricao}</h5>
                </div>
                <div className={styles["price"]}>
                    <h2 className={styles["dindin"]}>R$ {preco}</h2>
                    <button onClick={() => goToCardapio()} className={styles["buttonEdit"]}>Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
    );
};

export default CardCardapio;


















